// day 32_1
// [3차] 방금그곡

const isThisSong = (timeDiff, lyrics, findString) => {
    const newM = findString
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g")
      .replace(/(A#)/g, "a");
  
    const newMusicInfos = lyrics
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g")
      .replace(/(A#)/g, "a");
  
    let str = "";
    const repeatCount = parseInt(timeDiff / newMusicInfos.length);
    if (repeatCount === 0) {
      str = newMusicInfos.substring(0, timeDiff);
    } else {
      str =
        newMusicInfos.repeat(repeatCount) +
        newMusicInfos.substring(0, timeDiff - newMusicInfos.length * repeatCount);
    }
    if (str.indexOf(newM) !== -1) {
      return 1;
    }
    return 0;
  };
  
  const calculateTime = (st_time, ed_time) => {
    return (
      (parseInt(ed_time.substring(0, 2)) - parseInt(st_time.substring(0, 2))) *
        60 +
      parseInt(ed_time.substring(3)) -
      parseInt(st_time.substring(3))
    );
  };
  
  const solution = (m, musicinfos) => {
     let songCandidates = [];
    for (let i = 0; i < musicinfos.length; i++) {
      const arr = musicinfos[i].split(",");
      const [st_time, ed_time, title, lyrics] = arr;
      const timeDiff = calculateTime(st_time, ed_time);
      if (isThisSong(timeDiff, lyrics, m)) {
        songCandidates.push([title, timeDiff]);
      }
    }
  
    if (songCandidates.length === 0) {
      return "(None)";
    } else if (songCandidates.length === 1) {
      return songCandidates[0][0];
    } else {
      let maxTime = 0;
      let answer = "";
      for (let i = 0; i < songCandidates.length; i++) {
        if (maxTime < songCandidates[i][1]) {
          maxTime = songCandidates[i][1];
          answer = songCandidates[i][0];
        }
      }
      return answer;
    }
  };