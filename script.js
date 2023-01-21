(function () {
  const upload = document.querySelectorAll(".upload");
  const disavowOutput = document.getElementById("disavow-file-output");
  const csvOutput = document.getElementById("csv-file-output");
  const csvOutputTable = csvOutput.querySelector("table");
  const csvOutputThead = csvOutputTable.querySelector("thead");
  const csvOutputTbody = csvOutputTable.querySelector("tbody");
  const copyLinks = document.getElementById("copy-links");
  const downloadLinks = document.getElementById("download-links");
  const clearLinks = document.getElementById("clear-links");
 
  let csvData = [];
  let checkboxes = [];
  let disavowData = [];
  let isButtonsEnabled = false;

  const renderLinks = function () {
    let output = '';
    disavowData.forEach((item, i) => {
      if (item) {
        output += `<span class="domain-link" id="domain-${i}">${item}</span><br/>`;
      }
    })

    disavowOutput.innerHTML = output;

    if (disavowOutput.scrollHeight > 300) {
      setTimeout(() => {
        disavowOutput.scroll({ top: disavowOutput.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
    updateButtonsState();
  }

  const disavowCallback = function () {
    return true;
  };

  const csvCallback = function (entry, i) {
    const row = document.createElement("tr");
    const isChecked = i > 0 ? csvData[i-1].isChecked : false
    let firstCell = `<td><input class="toggle-box" id="toggle-item-${i}" type="checkbox" name="toggle-item" data-index="${i-1}" ${isChecked ? "checked" : ""}></td>`;

    if (i === 0) {
      firstCell = `<td><input type="checkbox" name="toggle-all" id="toggle-item-${i}"></td>`;
    }

    row.innerHTML += firstCell;

    entry.forEach(function (item, itemIndex) {
      let content = `<td>${item}</td>`;
      if (itemIndex === 0) {
        content = `<td><label for="toggle-item-${i}">${item}</label></td>`;
      }
      row.innerHTML += content;
    });

    if (i === 0) {
      csvOutputThead.append(row);
    } else {
      csvOutputTbody.append(row);
    }
  };

  const setCsvData = function (data) {
    csvData = data.filter((item, i) => i !== 0).map(function (item, i) {
      const isChecked = disavowData.find((domain) => {
        const prefixIndex = domain.indexOf(':');
        const link = domain.slice(prefixIndex+1);
        return item.includes(link);
      });
      return {
        isChecked: Boolean(isChecked),
        linkData: item,
        isHead: i === 0
      }
    });
  };

  const setDisavowData = function (element, index) {
    csvData[index].isChecked = element.checked;
    const domainName = `domain:${csvData[index].linkData[0]}`;
    if (element.checked && !disavowData.includes(domainName)) {
      disavowData.push(domainName);
    } else if (!element.checked && disavowData.includes(domainName)) {
      const itemIndex = disavowData.findIndex(item => item === domainName);
      disavowData.splice(itemIndex, 1);
    }
  };

  const syncData = function (results, type) {
    if (type === 'text/plain') {
      if (!checkboxes.length) {
        checkboxes = Array.from(document.querySelectorAll(".toggle-box"));
      }
      results.data.forEach((item) => {
        if (!disavowData.includes(item[0])) {
          disavowData.push(item[0]);
          const domainName = item[0].slice(item[0].indexOf(':') + 1);
          const isCsvContainsIndex = csvData.findIndex(item => item.linkData[0] === domainName);
          if (csvData.length && isCsvContainsIndex > -1) {
            csvData[isCsvContainsIndex].isChecked = true;
            checkboxes[isCsvContainsIndex].checked = true;
          }
        }
      });
    } else if (type === 'text/csv') {
      setCsvData(results.data);
    }
  };

  const updateButtonsState = function () {
    if (!isButtonsEnabled && disavowData.length) {
      copyLinks.removeAttribute("disabled");
      downloadLinks.removeAttribute("disabled");
      clearLinks.removeAttribute("disabled");
      isButtonsEnabled = true;
    } else if (isButtonsEnabled && !disavowData.length) {
      copyLinks.setAttribute("disabled", true);
      downloadLinks.setAttribute("disabled", true);
      clearLinks.setAttribute("disabled", true);
      isButtonsEnabled = false;
    }
  };

  const handleTableClick = function (e) {
    if (e && e.target && e.target.type && e.target.type === "checkbox") {
      if (e.target.name === "toggle-all") {
        if (!checkboxes.length) {
          checkboxes = Array.from(document.querySelectorAll(".toggle-box"));
        }
        checkboxes.forEach((checkbox, i) => {
          checkbox.checked = e.target.checked;
          setDisavowData(e.target, i);
        });
      } else {
        const index = parseInt(e.target.dataset.index);
        setDisavowData(e.target, index);
      }
    }
    renderLinks();
  };

  const handleCopyLinks = function () {
    const text = disavowData.join('\r\n')
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch(err => {
        alert('Error in copying text: ', err);
      });
  };

  const handleDownloadLinks = function () {
    const text = disavowData.join('\r\n');
    var filename = "disavow.txt";
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  };

  const handleClearLinks = function () {
    disavowData = [];
    renderLinks();
  }

  const handleUploadChange = function (e) {
    const { target } = e;
    const file = target.files[0];
    const config = {
      complete: function(results, file) {
        syncData(results, file.type);
        
        let callback = target.id === "disavow-file" ? disavowCallback : csvCallback;
        results.data.forEach(callback);
        
        renderLinks();
      }
    };
    Papa.parse(file, config);
  };

  upload.forEach(item => {item.addEventListener("change", handleUploadChange)});
  csvOutputTable.addEventListener("click", handleTableClick);
  copyLinks.addEventListener("click", handleCopyLinks);
  downloadLinks.addEventListener("click", handleDownloadLinks);
  clearLinks.addEventListener("click", handleClearLinks);
  
})();

// TODO:
// v 1. Sync data between fields
//   v 1.1. check when disavow file is uploaded
//   v 1.2. check when csv file is uploaded
//   v 1.3. Optimize for performace
//    1.4  Uploading txt file not syncing with table
// v 2. Style app
//  3. Add social meta tags
// v 4. Add how to page (help page)
//  5. Add parcel.js
// v 6. Check edge cases
//  7. Create GitHub repo
// v 8. Add credits and link to GitHub (created by: me)
