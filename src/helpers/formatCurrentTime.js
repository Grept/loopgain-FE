export default function formatCurrentTime(time) {
    let hh = Math.floor(time / 3600);
    let mm = Math.floor((time - (hh * 3600)) / 60);
    let ss = Math.floor((time - (hh * 3600) - (mm * 60)));

    if (hh < 10) {hh = "0" + hh}
    if (mm < 10) {mm = "0" + mm}
    if (ss < 10) {ss = "0" + ss}

    return `${hh}:${mm}:${ss}`
}