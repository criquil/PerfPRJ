/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 22294.0, "series": [{"data": [[0.0, 8.0], [0.1, 11.0], [0.2, 12.0], [0.3, 12.0], [0.4, 12.0], [0.5, 12.0], [0.6, 13.0], [0.7, 13.0], [0.8, 13.0], [0.9, 13.0], [1.0, 13.0], [1.1, 13.0], [1.2, 13.0], [1.3, 13.0], [1.4, 13.0], [1.5, 14.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 14.0], [2.1, 14.0], [2.2, 14.0], [2.3, 14.0], [2.4, 14.0], [2.5, 14.0], [2.6, 14.0], [2.7, 14.0], [2.8, 14.0], [2.9, 15.0], [3.0, 15.0], [3.1, 15.0], [3.2, 15.0], [3.3, 15.0], [3.4, 15.0], [3.5, 15.0], [3.6, 15.0], [3.7, 15.0], [3.8, 15.0], [3.9, 15.0], [4.0, 15.0], [4.1, 15.0], [4.2, 15.0], [4.3, 15.0], [4.4, 15.0], [4.5, 15.0], [4.6, 15.0], [4.7, 15.0], [4.8, 15.0], [4.9, 15.0], [5.0, 16.0], [5.1, 16.0], [5.2, 16.0], [5.3, 16.0], [5.4, 16.0], [5.5, 16.0], [5.6, 16.0], [5.7, 16.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 16.0], [7.2, 16.0], [7.3, 16.0], [7.4, 17.0], [7.5, 17.0], [7.6, 17.0], [7.7, 17.0], [7.8, 17.0], [7.9, 17.0], [8.0, 17.0], [8.1, 17.0], [8.2, 17.0], [8.3, 17.0], [8.4, 17.0], [8.5, 17.0], [8.6, 17.0], [8.7, 17.0], [8.8, 17.0], [8.9, 17.0], [9.0, 17.0], [9.1, 17.0], [9.2, 17.0], [9.3, 17.0], [9.4, 17.0], [9.5, 17.0], [9.6, 17.0], [9.7, 17.0], [9.8, 17.0], [9.9, 18.0], [10.0, 18.0], [10.1, 18.0], [10.2, 18.0], [10.3, 18.0], [10.4, 18.0], [10.5, 18.0], [10.6, 18.0], [10.7, 18.0], [10.8, 18.0], [10.9, 18.0], [11.0, 18.0], [11.1, 18.0], [11.2, 18.0], [11.3, 18.0], [11.4, 18.0], [11.5, 18.0], [11.6, 18.0], [11.7, 18.0], [11.8, 18.0], [11.9, 18.0], [12.0, 18.0], [12.1, 18.0], [12.2, 18.0], [12.3, 18.0], [12.4, 18.0], [12.5, 19.0], [12.6, 19.0], [12.7, 19.0], [12.8, 19.0], [12.9, 19.0], [13.0, 19.0], [13.1, 19.0], [13.2, 19.0], [13.3, 19.0], [13.4, 19.0], [13.5, 19.0], [13.6, 19.0], [13.7, 19.0], [13.8, 19.0], [13.9, 19.0], [14.0, 19.0], [14.1, 19.0], [14.2, 19.0], [14.3, 19.0], [14.4, 19.0], [14.5, 19.0], [14.6, 19.0], [14.7, 19.0], [14.8, 19.0], [14.9, 19.0], [15.0, 19.0], [15.1, 20.0], [15.2, 20.0], [15.3, 20.0], [15.4, 20.0], [15.5, 20.0], [15.6, 20.0], [15.7, 20.0], [15.8, 20.0], [15.9, 20.0], [16.0, 20.0], [16.1, 20.0], [16.2, 20.0], [16.3, 20.0], [16.4, 20.0], [16.5, 20.0], [16.6, 20.0], [16.7, 20.0], [16.8, 20.0], [16.9, 20.0], [17.0, 20.0], [17.1, 20.0], [17.2, 20.0], [17.3, 20.0], [17.4, 20.0], [17.5, 20.0], [17.6, 20.0], [17.7, 21.0], [17.8, 21.0], [17.9, 21.0], [18.0, 21.0], [18.1, 21.0], [18.2, 21.0], [18.3, 21.0], [18.4, 21.0], [18.5, 21.0], [18.6, 21.0], [18.7, 21.0], [18.8, 21.0], [18.9, 21.0], [19.0, 21.0], [19.1, 21.0], [19.2, 21.0], [19.3, 21.0], [19.4, 21.0], [19.5, 21.0], [19.6, 21.0], [19.7, 21.0], [19.8, 21.0], [19.9, 21.0], [20.0, 21.0], [20.1, 22.0], [20.2, 22.0], [20.3, 22.0], [20.4, 22.0], [20.5, 22.0], [20.6, 22.0], [20.7, 22.0], [20.8, 22.0], [20.9, 22.0], [21.0, 22.0], [21.1, 22.0], [21.2, 22.0], [21.3, 22.0], [21.4, 22.0], [21.5, 22.0], [21.6, 22.0], [21.7, 22.0], [21.8, 22.0], [21.9, 22.0], [22.0, 22.0], [22.1, 22.0], [22.2, 22.0], [22.3, 22.0], [22.4, 22.0], [22.5, 23.0], [22.6, 23.0], [22.7, 23.0], [22.8, 23.0], [22.9, 23.0], [23.0, 23.0], [23.1, 23.0], [23.2, 23.0], [23.3, 23.0], [23.4, 23.0], [23.5, 23.0], [23.6, 23.0], [23.7, 23.0], [23.8, 23.0], [23.9, 23.0], [24.0, 23.0], [24.1, 23.0], [24.2, 23.0], [24.3, 23.0], [24.4, 23.0], [24.5, 23.0], [24.6, 23.0], [24.7, 23.0], [24.8, 23.0], [24.9, 24.0], [25.0, 24.0], [25.1, 24.0], [25.2, 24.0], [25.3, 24.0], [25.4, 24.0], [25.5, 24.0], [25.6, 24.0], [25.7, 24.0], [25.8, 24.0], [25.9, 24.0], [26.0, 24.0], [26.1, 24.0], [26.2, 24.0], [26.3, 24.0], [26.4, 24.0], [26.5, 24.0], [26.6, 24.0], [26.7, 24.0], [26.8, 24.0], [26.9, 24.0], [27.0, 24.0], [27.1, 25.0], [27.2, 25.0], [27.3, 25.0], [27.4, 25.0], [27.5, 25.0], [27.6, 25.0], [27.7, 25.0], [27.8, 25.0], [27.9, 25.0], [28.0, 25.0], [28.1, 25.0], [28.2, 25.0], [28.3, 25.0], [28.4, 25.0], [28.5, 25.0], [28.6, 25.0], [28.7, 25.0], [28.8, 25.0], [28.9, 25.0], [29.0, 25.0], [29.1, 25.0], [29.2, 26.0], [29.3, 26.0], [29.4, 26.0], [29.5, 26.0], [29.6, 26.0], [29.7, 26.0], [29.8, 26.0], [29.9, 26.0], [30.0, 26.0], [30.1, 26.0], [30.2, 26.0], [30.3, 26.0], [30.4, 26.0], [30.5, 26.0], [30.6, 26.0], [30.7, 26.0], [30.8, 26.0], [30.9, 26.0], [31.0, 26.0], [31.1, 26.0], [31.2, 27.0], [31.3, 27.0], [31.4, 27.0], [31.5, 27.0], [31.6, 27.0], [31.7, 27.0], [31.8, 27.0], [31.9, 27.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 27.0], [32.6, 27.0], [32.7, 27.0], [32.8, 27.0], [32.9, 28.0], [33.0, 28.0], [33.1, 28.0], [33.2, 28.0], [33.3, 28.0], [33.4, 28.0], [33.5, 28.0], [33.6, 28.0], [33.7, 28.0], [33.8, 28.0], [33.9, 28.0], [34.0, 28.0], [34.1, 28.0], [34.2, 28.0], [34.3, 28.0], [34.4, 29.0], [34.5, 29.0], [34.6, 29.0], [34.7, 29.0], [34.8, 29.0], [34.9, 29.0], [35.0, 29.0], [35.1, 29.0], [35.2, 29.0], [35.3, 29.0], [35.4, 29.0], [35.5, 29.0], [35.6, 29.0], [35.7, 29.0], [35.8, 29.0], [35.9, 30.0], [36.0, 30.0], [36.1, 30.0], [36.2, 30.0], [36.3, 30.0], [36.4, 30.0], [36.5, 30.0], [36.6, 30.0], [36.7, 30.0], [36.8, 30.0], [36.9, 30.0], [37.0, 30.0], [37.1, 30.0], [37.2, 30.0], [37.3, 30.0], [37.4, 31.0], [37.5, 31.0], [37.6, 31.0], [37.7, 31.0], [37.8, 31.0], [37.9, 31.0], [38.0, 31.0], [38.1, 31.0], [38.2, 31.0], [38.3, 31.0], [38.4, 31.0], [38.5, 31.0], [38.6, 32.0], [38.7, 32.0], [38.8, 32.0], [38.9, 32.0], [39.0, 32.0], [39.1, 32.0], [39.2, 32.0], [39.3, 32.0], [39.4, 32.0], [39.5, 32.0], [39.6, 33.0], [39.7, 33.0], [39.8, 33.0], [39.9, 33.0], [40.0, 33.0], [40.1, 33.0], [40.2, 33.0], [40.3, 33.0], [40.4, 33.0], [40.5, 34.0], [40.6, 34.0], [40.7, 34.0], [40.8, 34.0], [40.9, 34.0], [41.0, 34.0], [41.1, 34.0], [41.2, 34.0], [41.3, 35.0], [41.4, 35.0], [41.5, 35.0], [41.6, 35.0], [41.7, 35.0], [41.8, 35.0], [41.9, 36.0], [42.0, 36.0], [42.1, 36.0], [42.2, 36.0], [42.3, 36.0], [42.4, 36.0], [42.5, 36.0], [42.6, 37.0], [42.7, 37.0], [42.8, 37.0], [42.9, 37.0], [43.0, 37.0], [43.1, 37.0], [43.2, 38.0], [43.3, 38.0], [43.4, 38.0], [43.5, 38.0], [43.6, 39.0], [43.7, 39.0], [43.8, 39.0], [43.9, 39.0], [44.0, 39.0], [44.1, 40.0], [44.2, 40.0], [44.3, 40.0], [44.4, 40.0], [44.5, 41.0], [44.6, 41.0], [44.7, 41.0], [44.8, 41.0], [44.9, 42.0], [45.0, 42.0], [45.1, 42.0], [45.2, 43.0], [45.3, 43.0], [45.4, 44.0], [45.5, 44.0], [45.6, 44.0], [45.7, 45.0], [45.8, 45.0], [45.9, 46.0], [46.0, 46.0], [46.1, 47.0], [46.2, 47.0], [46.3, 48.0], [46.4, 48.0], [46.5, 49.0], [46.6, 49.0], [46.7, 50.0], [46.8, 51.0], [46.9, 51.0], [47.0, 52.0], [47.1, 53.0], [47.2, 53.0], [47.3, 54.0], [47.4, 55.0], [47.5, 56.0], [47.6, 57.0], [47.7, 59.0], [47.8, 60.0], [47.9, 61.0], [48.0, 62.0], [48.1, 64.0], [48.2, 66.0], [48.3, 68.0], [48.4, 70.0], [48.5, 73.0], [48.6, 75.0], [48.7, 78.0], [48.8, 82.0], [48.9, 87.0], [49.0, 93.0], [49.1, 100.0], [49.2, 109.0], [49.3, 117.0], [49.4, 124.0], [49.5, 132.0], [49.6, 140.0], [49.7, 146.0], [49.8, 153.0], [49.9, 162.0], [50.0, 186.0], [50.1, 217.0], [50.2, 222.0], [50.3, 223.0], [50.4, 224.0], [50.5, 225.0], [50.6, 225.0], [50.7, 226.0], [50.8, 226.0], [50.9, 227.0], [51.0, 227.0], [51.1, 227.0], [51.2, 228.0], [51.3, 228.0], [51.4, 228.0], [51.5, 229.0], [51.6, 229.0], [51.7, 229.0], [51.8, 230.0], [51.9, 230.0], [52.0, 230.0], [52.1, 231.0], [52.2, 231.0], [52.3, 231.0], [52.4, 231.0], [52.5, 232.0], [52.6, 232.0], [52.7, 232.0], [52.8, 232.0], [52.9, 233.0], [53.0, 233.0], [53.1, 233.0], [53.2, 233.0], [53.3, 234.0], [53.4, 234.0], [53.5, 234.0], [53.6, 235.0], [53.7, 235.0], [53.8, 235.0], [53.9, 235.0], [54.0, 235.0], [54.1, 236.0], [54.2, 236.0], [54.3, 236.0], [54.4, 237.0], [54.5, 237.0], [54.6, 237.0], [54.7, 237.0], [54.8, 238.0], [54.9, 238.0], [55.0, 238.0], [55.1, 238.0], [55.2, 239.0], [55.3, 239.0], [55.4, 239.0], [55.5, 240.0], [55.6, 240.0], [55.7, 240.0], [55.8, 240.0], [55.9, 241.0], [56.0, 241.0], [56.1, 241.0], [56.2, 241.0], [56.3, 242.0], [56.4, 242.0], [56.5, 242.0], [56.6, 242.0], [56.7, 243.0], [56.8, 243.0], [56.9, 243.0], [57.0, 244.0], [57.1, 244.0], [57.2, 244.0], [57.3, 245.0], [57.4, 245.0], [57.5, 245.0], [57.6, 246.0], [57.7, 246.0], [57.8, 246.0], [57.9, 247.0], [58.0, 247.0], [58.1, 247.0], [58.2, 248.0], [58.3, 248.0], [58.4, 249.0], [58.5, 249.0], [58.6, 249.0], [58.7, 250.0], [58.8, 250.0], [58.9, 251.0], [59.0, 251.0], [59.1, 252.0], [59.2, 252.0], [59.3, 253.0], [59.4, 253.0], [59.5, 254.0], [59.6, 254.0], [59.7, 255.0], [59.8, 255.0], [59.9, 256.0], [60.0, 256.0], [60.1, 257.0], [60.2, 258.0], [60.3, 258.0], [60.4, 259.0], [60.5, 260.0], [60.6, 261.0], [60.7, 262.0], [60.8, 263.0], [60.9, 264.0], [61.0, 264.0], [61.1, 265.0], [61.2, 267.0], [61.3, 268.0], [61.4, 269.0], [61.5, 271.0], [61.6, 273.0], [61.7, 276.0], [61.8, 278.0], [61.9, 281.0], [62.0, 284.0], [62.1, 287.0], [62.2, 290.0], [62.3, 293.0], [62.4, 299.0], [62.5, 305.0], [62.6, 314.0], [62.7, 323.0], [62.8, 328.0], [62.9, 334.0], [63.0, 339.0], [63.1, 345.0], [63.2, 352.0], [63.3, 359.0], [63.4, 366.0], [63.5, 375.0], [63.6, 383.0], [63.7, 388.0], [63.8, 392.0], [63.9, 396.0], [64.0, 398.0], [64.1, 401.0], [64.2, 402.0], [64.3, 404.0], [64.4, 405.0], [64.5, 406.0], [64.6, 408.0], [64.7, 409.0], [64.8, 410.0], [64.9, 410.0], [65.0, 411.0], [65.1, 412.0], [65.2, 413.0], [65.3, 414.0], [65.4, 415.0], [65.5, 415.0], [65.6, 416.0], [65.7, 417.0], [65.8, 417.0], [65.9, 418.0], [66.0, 418.0], [66.1, 419.0], [66.2, 419.0], [66.3, 420.0], [66.4, 420.0], [66.5, 421.0], [66.6, 421.0], [66.7, 422.0], [66.8, 422.0], [66.9, 423.0], [67.0, 423.0], [67.1, 424.0], [67.2, 424.0], [67.3, 425.0], [67.4, 425.0], [67.5, 426.0], [67.6, 426.0], [67.7, 427.0], [67.8, 428.0], [67.9, 428.0], [68.0, 429.0], [68.1, 429.0], [68.2, 430.0], [68.3, 431.0], [68.4, 432.0], [68.5, 433.0], [68.6, 435.0], [68.7, 437.0], [68.8, 440.0], [68.9, 444.0], [69.0, 449.0], [69.1, 454.0], [69.2, 461.0], [69.3, 477.0], [69.4, 495.0], [69.5, 525.0], [69.6, 529.0], [69.7, 532.0], [69.8, 534.0], [69.9, 536.0], [70.0, 537.0], [70.1, 539.0], [70.2, 540.0], [70.3, 542.0], [70.4, 543.0], [70.5, 544.0], [70.6, 546.0], [70.7, 547.0], [70.8, 549.0], [70.9, 551.0], [71.0, 553.0], [71.1, 555.0], [71.2, 559.0], [71.3, 564.0], [71.4, 568.0], [71.5, 573.0], [71.6, 581.0], [71.7, 592.0], [71.8, 603.0], [71.9, 615.0], [72.0, 619.0], [72.1, 625.0], [72.2, 636.0], [72.3, 652.0], [72.4, 669.0], [72.5, 694.0], [72.6, 700.0], [72.7, 855.0], [72.8, 915.0], [72.9, 951.0], [73.0, 1011.0], [73.1, 1014.0], [73.2, 1015.0], [73.3, 1016.0], [73.4, 1017.0], [73.5, 1017.0], [73.6, 1018.0], [73.7, 1018.0], [73.8, 1019.0], [73.9, 1019.0], [74.0, 1020.0], [74.1, 1020.0], [74.2, 1020.0], [74.3, 1020.0], [74.4, 1021.0], [74.5, 1021.0], [74.6, 1021.0], [74.7, 1021.0], [74.8, 1022.0], [74.9, 1022.0], [75.0, 1022.0], [75.1, 1022.0], [75.2, 1023.0], [75.3, 1023.0], [75.4, 1023.0], [75.5, 1023.0], [75.6, 1023.0], [75.7, 1024.0], [75.8, 1024.0], [75.9, 1024.0], [76.0, 1024.0], [76.1, 1024.0], [76.2, 1024.0], [76.3, 1025.0], [76.4, 1025.0], [76.5, 1025.0], [76.6, 1025.0], [76.7, 1025.0], [76.8, 1026.0], [76.9, 1026.0], [77.0, 1026.0], [77.1, 1026.0], [77.2, 1026.0], [77.3, 1026.0], [77.4, 1026.0], [77.5, 1027.0], [77.6, 1027.0], [77.7, 1027.0], [77.8, 1027.0], [77.9, 1027.0], [78.0, 1028.0], [78.1, 1028.0], [78.2, 1028.0], [78.3, 1028.0], [78.4, 1028.0], [78.5, 1028.0], [78.6, 1028.0], [78.7, 1029.0], [78.8, 1029.0], [78.9, 1029.0], [79.0, 1029.0], [79.1, 1029.0], [79.2, 1029.0], [79.3, 1030.0], [79.4, 1030.0], [79.5, 1030.0], [79.6, 1030.0], [79.7, 1030.0], [79.8, 1030.0], [79.9, 1030.0], [80.0, 1031.0], [80.1, 1031.0], [80.2, 1031.0], [80.3, 1031.0], [80.4, 1031.0], [80.5, 1031.0], [80.6, 1032.0], [80.7, 1032.0], [80.8, 1032.0], [80.9, 1032.0], [81.0, 1032.0], [81.1, 1032.0], [81.2, 1033.0], [81.3, 1033.0], [81.4, 1033.0], [81.5, 1033.0], [81.6, 1033.0], [81.7, 1033.0], [81.8, 1033.0], [81.9, 1034.0], [82.0, 1034.0], [82.1, 1034.0], [82.2, 1034.0], [82.3, 1034.0], [82.4, 1035.0], [82.5, 1035.0], [82.6, 1035.0], [82.7, 1035.0], [82.8, 1035.0], [82.9, 1036.0], [83.0, 1036.0], [83.1, 1036.0], [83.2, 1036.0], [83.3, 1037.0], [83.4, 1037.0], [83.5, 1037.0], [83.6, 1037.0], [83.7, 1038.0], [83.8, 1038.0], [83.9, 1038.0], [84.0, 1038.0], [84.1, 1039.0], [84.2, 1039.0], [84.3, 1039.0], [84.4, 1040.0], [84.5, 1040.0], [84.6, 1040.0], [84.7, 1041.0], [84.8, 1041.0], [84.9, 1042.0], [85.0, 1042.0], [85.1, 1042.0], [85.2, 1043.0], [85.3, 1043.0], [85.4, 1044.0], [85.5, 1044.0], [85.6, 1045.0], [85.7, 1045.0], [85.8, 1046.0], [85.9, 1046.0], [86.0, 1047.0], [86.1, 1047.0], [86.2, 1048.0], [86.3, 1049.0], [86.4, 1050.0], [86.5, 1051.0], [86.6, 1052.0], [86.7, 1053.0], [86.8, 1054.0], [86.9, 1055.0], [87.0, 1057.0], [87.1, 1058.0], [87.2, 1060.0], [87.3, 1062.0], [87.4, 1065.0], [87.5, 1068.0], [87.6, 1072.0], [87.7, 1075.0], [87.8, 1080.0], [87.9, 1092.0], [88.0, 1104.0], [88.1, 1122.0], [88.2, 1137.0], [88.3, 1144.0], [88.4, 1149.0], [88.5, 1156.0], [88.6, 1164.0], [88.7, 1181.0], [88.8, 1225.0], [88.9, 1230.0], [89.0, 1232.0], [89.1, 1234.0], [89.2, 1237.0], [89.3, 1239.0], [89.4, 1240.0], [89.5, 1241.0], [89.6, 1243.0], [89.7, 1244.0], [89.8, 1245.0], [89.9, 1246.0], [90.0, 1247.0], [90.1, 1248.0], [90.2, 1249.0], [90.3, 1249.0], [90.4, 1250.0], [90.5, 1251.0], [90.6, 1252.0], [90.7, 1252.0], [90.8, 1253.0], [90.9, 1254.0], [91.0, 1255.0], [91.1, 1256.0], [91.2, 1257.0], [91.3, 1259.0], [91.4, 1260.0], [91.5, 1261.0], [91.6, 1263.0], [91.7, 1265.0], [91.8, 1268.0], [91.9, 1270.0], [92.0, 1273.0], [92.1, 1277.0], [92.2, 1282.0], [92.3, 1289.0], [92.4, 1297.0], [92.5, 1310.0], [92.6, 1337.0], [92.7, 1370.0], [92.8, 1417.0], [92.9, 1534.0], [93.0, 1545.0], [93.1, 1550.0], [93.2, 1554.0], [93.3, 1560.0], [93.4, 1575.0], [93.5, 1600.0], [93.6, 1837.0], [93.7, 1977.0], [93.8, 2060.0], [93.9, 2089.0], [94.0, 2149.0], [94.1, 2174.0], [94.2, 2322.0], [94.3, 3012.0], [94.4, 3022.0], [94.5, 3025.0], [94.6, 3027.0], [94.7, 3028.0], [94.8, 3030.0], [94.9, 3031.0], [95.0, 3032.0], [95.1, 3033.0], [95.2, 3033.0], [95.3, 3034.0], [95.4, 3036.0], [95.5, 3036.0], [95.6, 3037.0], [95.7, 3038.0], [95.8, 3039.0], [95.9, 3039.0], [96.0, 3041.0], [96.1, 3042.0], [96.2, 3043.0], [96.3, 3044.0], [96.4, 3045.0], [96.5, 3046.0], [96.6, 3047.0], [96.7, 3049.0], [96.8, 3051.0], [96.9, 3054.0], [97.0, 3056.0], [97.1, 3060.0], [97.2, 3067.0], [97.3, 3081.0], [97.4, 3138.0], [97.5, 3243.0], [97.6, 3248.0], [97.7, 3253.0], [97.8, 3257.0], [97.9, 3261.0], [98.0, 3265.0], [98.1, 3271.0], [98.2, 3283.0], [98.3, 3331.0], [98.4, 3518.0], [98.5, 3575.0], [98.6, 4092.0], [98.7, 4374.0], [98.8, 7032.0], [98.9, 7037.0], [99.0, 7042.0], [99.1, 7047.0], [99.2, 7054.0], [99.3, 7063.0], [99.4, 7084.0], [99.5, 7259.0], [99.6, 7283.0], [99.7, 7571.0], [99.8, 15038.0], [99.9, 15123.0], [100.0, 22294.0]], "isOverall": false, "label": "GET /characters (Page 1)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 20055.0, "series": [{"data": [[0.0, 20055.0], [600.0, 329.0], [700.0, 37.0], [800.0, 32.0], [900.0, 95.0], [1000.0, 6122.0], [1100.0, 313.0], [1200.0, 1505.0], [1300.0, 142.0], [1400.0, 39.0], [1500.0, 257.0], [1600.0, 24.0], [1700.0, 7.0], [1800.0, 22.0], [1900.0, 34.0], [2000.0, 94.0], [2100.0, 81.0], [2300.0, 21.0], [2200.0, 19.0], [2400.0, 1.0], [2500.0, 5.0], [2600.0, 2.0], [2800.0, 13.0], [2700.0, 1.0], [2900.0, 2.0], [3000.0, 1248.0], [3100.0, 27.0], [3200.0, 344.0], [3300.0, 40.0], [3400.0, 15.0], [3500.0, 53.0], [3600.0, 3.0], [3800.0, 2.0], [3900.0, 8.0], [4000.0, 24.0], [4300.0, 4.0], [4100.0, 27.0], [4200.0, 4.0], [4800.0, 3.0], [4700.0, 3.0], [4900.0, 2.0], [6100.0, 1.0], [7000.0, 280.0], [7100.0, 9.0], [7300.0, 15.0], [7200.0, 89.0], [7600.0, 5.0], [7500.0, 13.0], [7900.0, 2.0], [7700.0, 1.0], [8100.0, 6.0], [8000.0, 2.0], [8400.0, 1.0], [8800.0, 1.0], [10100.0, 1.0], [15000.0, 55.0], [15200.0, 10.0], [15300.0, 3.0], [15100.0, 2.0], [15600.0, 1.0], [15500.0, 3.0], [16000.0, 1.0], [21000.0, 17.0], [21200.0, 3.0], [22200.0, 1.0], [22000.0, 1.0], [100.0, 385.0], [200.0, 5058.0], [300.0, 665.0], [400.0, 2186.0], [500.0, 971.0]], "isOverall": false, "label": "GET /characters (Page 1)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2913.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 28351.0, "series": [{"data": [[0.0, 28351.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9583.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2913.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 198.31210245102199, "minX": 1.76947788E12, "maxY": 200.0, "series": [{"data": [[1.769478E12, 198.31210245102199], [1.76947788E12, 199.38794576734674], [1.76947794E12, 200.0]], "isOverall": false, "label": "Spike Test - 200 Users Burst", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.769478E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 23.0, "minX": 1.0, "maxY": 15061.0, "series": [{"data": [[3.0, 15034.0], [4.0, 15043.0], [6.0, 15033.5], [7.0, 15036.0], [8.0, 7041.0], [9.0, 7046.0], [10.0, 7036.0], [11.0, 7034.0], [12.0, 7031.0], [13.0, 15043.0], [14.0, 15032.0], [15.0, 15031.0], [16.0, 15037.0], [17.0, 15025.0], [18.0, 7033.0], [20.0, 7037.5], [21.0, 7036.0], [22.0, 7036.0], [23.0, 7032.0], [24.0, 7023.0], [25.0, 7051.0], [26.0, 7042.0], [27.0, 7050.0], [28.0, 7042.0], [29.0, 7040.0], [30.0, 7045.0], [31.0, 7044.0], [33.0, 15061.0], [32.0, 7038.0], [35.0, 3037.0], [34.0, 3056.0], [37.0, 3027.0], [36.0, 3033.0], [39.0, 3032.0], [38.0, 3036.0], [41.0, 3034.0], [40.0, 3033.0], [43.0, 3019.0], [42.0, 3027.0], [45.0, 7028.0], [44.0, 7042.0], [47.0, 7022.0], [46.0, 7024.0], [49.0, 15046.0], [48.0, 15046.0], [51.0, 3012.0], [50.0, 3038.0], [53.0, 3017.0], [52.0, 3020.0], [55.0, 3026.0], [54.0, 3026.0], [57.0, 3027.5], [59.0, 3033.0], [58.0, 3024.0], [61.0, 3022.0], [60.0, 3024.0], [63.0, 3020.0], [62.0, 3023.0], [67.0, 3034.0], [66.0, 3036.0], [65.0, 3027.0], [64.0, 3017.0], [71.0, 1014.0], [70.0, 1034.0], [69.0, 1019.0], [68.0, 3034.0], [75.0, 1036.0], [74.0, 1029.0], [73.0, 1020.0], [72.0, 1022.0], [79.0, 1018.0], [78.0, 1019.0], [77.0, 1022.0], [76.0, 1021.0], [83.0, 3026.0], [82.0, 1012.0], [81.0, 1020.0], [80.0, 1016.0], [87.0, 1028.0], [86.0, 1031.0], [85.0, 1023.0], [91.0, 1037.0], [90.0, 2020.5], [88.0, 3039.0], [95.0, 1029.0], [94.0, 1017.0], [93.0, 1022.0], [92.0, 1015.0], [99.0, 1032.0], [98.0, 1032.0], [97.0, 1015.0], [96.0, 1016.0], [103.0, 1013.0], [102.0, 1022.0], [101.0, 1026.0], [100.0, 1030.0], [107.0, 1033.0], [106.0, 2039.0], [104.0, 3051.0], [111.0, 1032.0], [110.0, 1033.0], [109.0, 1026.0], [108.0, 1029.0], [115.0, 1038.0], [114.0, 1022.0], [113.0, 1029.0], [112.0, 1135.0], [119.0, 1237.0], [118.0, 3030.0], [117.0, 1021.0], [116.0, 1023.0], [123.0, 1020.0], [121.0, 1028.0], [120.0, 867.0], [127.0, 1027.0], [126.0, 1032.0], [125.0, 1015.0], [124.0, 1013.0], [135.0, 1046.0], [134.0, 3037.5], [132.0, 1019.0], [130.0, 1022.0], [129.0, 4096.0], [128.0, 1017.0], [141.0, 395.8235294117647], [143.0, 639.0], [142.0, 544.0], [139.0, 1036.0], [138.0, 2042.0], [137.0, 1023.0], [136.0, 4080.0], [144.0, 1107.5], [145.0, 698.6666666666666], [146.0, 670.0769230769231], [150.0, 434.1666666666667], [151.0, 609.1666666666667], [149.0, 1024.0], [148.0, 3036.0], [147.0, 3035.0], [152.0, 461.0], [155.0, 1511.142857142857], [156.0, 474.0], [157.0, 509.375], [158.0, 362.6666666666667], [159.0, 242.0], [154.0, 1020.0], [153.0, 1024.0], [160.0, 473.75], [164.0, 807.0], [165.0, 146.0], [166.0, 564.5], [167.0, 604.25], [163.0, 1022.0], [162.0, 1548.0], [161.0, 240.0], [171.0, 921.0], [174.0, 472.44444444444434], [175.0, 1020.0], [173.0, 244.0], [172.0, 1031.0], [170.0, 3555.0], [168.0, 3565.0], [179.0, 1095.5], [180.0, 533.5], [181.0, 920.2], [182.0, 374.6666666666667], [183.0, 494.0], [178.0, 1028.0], [177.0, 1015.0], [176.0, 1017.0], [184.0, 701.5], [185.0, 667.0], [187.0, 954.6666666666666], [188.0, 204.66666666666669], [190.0, 503.0], [191.0, 203.0], [192.0, 241.0], [199.0, 870.5], [198.0, 273.0], [197.0, 25.0], [196.0, 33.0], [195.0, 31.0], [194.0, 363.0], [193.0, 23.0], [200.0, 578.2106029927401], [1.0, 15037.0]], "isOverall": false, "label": "GET /characters (Page 1)", "isController": false}, {"data": [[199.38125198912923, 591.0198545792841]], "isOverall": false, "label": "GET /characters (Page 1)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 18870.55, "minX": 1.76947788E12, "maxY": 3045905.8, "series": [{"data": [[1.769478E12, 1771008.2], [1.76947788E12, 1318305.4], [1.76947794E12, 3045905.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.769478E12, 25350.65], [1.76947788E12, 18870.55], [1.76947794E12, 43599.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.769478E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 495.85621510766646, "minX": 1.76947788E12, "maxY": 658.4155711983724, "series": [{"data": [[1.769478E12, 658.4155711983724], [1.76947788E12, 495.85621510766646], [1.76947794E12, 593.0213521376829]], "isOverall": false, "label": "GET /characters (Page 1)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.769478E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 495.68576962515596, "minX": 1.76947788E12, "maxY": 658.3075226867953, "series": [{"data": [[1.769478E12, 658.3075226867953], [1.76947788E12, 495.68576962515596], [1.76947794E12, 592.935647714387]], "isOverall": false, "label": "GET /characters (Page 1)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.769478E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 457.22091830921653, "minX": 1.76947788E12, "maxY": 648.3510304469519, "series": [{"data": [[1.769478E12, 648.3510304469519], [1.76947788E12, 457.22091830921653], [1.76947794E12, 584.2174663444933]], "isOverall": false, "label": "GET /characters (Page 1)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.769478E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.76947788E12, "maxY": 22294.0, "series": [{"data": [[1.769478E12, 22294.0], [1.76947788E12, 8434.0], [1.76947794E12, 21077.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.769478E12, 8.0], [1.76947788E12, 11.0], [1.76947794E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.769478E12, 1263.0], [1.76947788E12, 1045.0], [1.76947794E12, 1249.9000000000015]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.769478E12, 7057.0], [1.76947788E12, 3258.0], [1.76947794E12, 7045.990000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.769478E12, 58.0], [1.76947788E12, 402.0], [1.76947794E12, 39.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.769478E12, 3040.0], [1.76947788E12, 1281.2000000000007], [1.76947794E12, 3033.9500000000007]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.769478E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 27.0, "minX": 3.0, "maxY": 15036.0, "series": [{"data": [[3.0, 15036.0], [4.0, 15035.5], [5.0, 7036.0], [11.0, 3034.0], [19.0, 7042.0], [41.0, 3022.0], [93.0, 483.0], [126.0, 802.0], [134.0, 533.5], [170.0, 585.5], [192.0, 1017.0], [227.0, 409.0], [236.0, 277.0], [241.0, 235.0], [246.0, 233.0], [254.0, 251.0], [268.0, 234.0], [266.0, 235.0], [261.0, 229.0], [264.0, 231.0], [258.0, 94.5], [263.0, 228.0], [262.0, 226.5], [270.0, 235.0], [271.0, 55.0], [259.0, 239.0], [275.0, 323.0], [287.0, 230.0], [285.0, 232.0], [280.0, 239.5], [273.0, 231.0], [282.0, 227.0], [276.0, 226.5], [279.0, 227.0], [297.0, 244.0], [301.0, 228.0], [302.0, 225.0], [303.0, 229.0], [288.0, 235.0], [317.0, 39.0], [314.0, 225.0], [319.0, 37.0], [316.0, 33.0], [305.0, 66.0], [315.0, 227.0], [328.0, 59.5], [322.0, 38.0], [321.0, 28.0], [329.0, 224.0], [332.0, 45.0], [324.0, 226.0], [327.0, 218.0], [342.0, 578.5], [336.0, 70.5], [345.0, 54.0], [337.0, 27.0], [344.0, 215.5], [358.0, 39.5], [365.0, 37.0], [366.0, 54.0], [382.0, 120.0], [383.0, 31.0], [371.0, 52.0], [377.0, 31.0], [379.0, 129.0], [376.0, 46.0], [380.0, 37.0], [374.0, 35.0], [369.0, 52.0], [370.0, 53.0], [372.0, 46.0], [373.0, 43.0], [384.0, 37.0], [398.0, 48.0], [397.0, 31.0], [387.0, 30.0], [390.0, 27.0], [386.0, 38.0], [394.0, 37.0], [413.0, 36.0], [409.0, 32.0], [410.0, 422.0], [400.0, 34.0], [404.0, 29.0], [402.0, 33.0], [412.0, 30.0], [407.0, 27.0], [406.0, 35.0], [414.0, 36.0], [420.0, 30.5], [431.0, 27.0], [427.0, 27.0], [416.0, 27.0], [450.0, 397.0], [460.0, 421.0], [453.0, 466.0], [452.0, 30.0], [477.0, 419.0], [508.0, 418.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 508.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 26.0, "minX": 3.0, "maxY": 15036.0, "series": [{"data": [[3.0, 15036.0], [4.0, 15035.0], [5.0, 7036.0], [11.0, 3034.0], [19.0, 7042.0], [41.0, 3022.0], [93.0, 480.0], [126.0, 802.0], [134.0, 533.5], [170.0, 585.5], [192.0, 1016.5], [227.0, 409.0], [236.0, 276.5], [241.0, 235.0], [246.0, 233.0], [254.0, 251.0], [268.0, 234.0], [266.0, 234.5], [261.0, 229.0], [264.0, 231.0], [258.0, 94.5], [263.0, 228.0], [262.0, 226.0], [270.0, 234.5], [271.0, 55.0], [259.0, 239.0], [275.0, 323.0], [287.0, 230.0], [285.0, 232.0], [280.0, 239.0], [273.0, 231.0], [282.0, 227.0], [276.0, 226.5], [279.0, 227.0], [297.0, 244.0], [301.0, 228.0], [302.0, 225.0], [303.0, 229.0], [288.0, 234.5], [317.0, 39.0], [314.0, 225.0], [319.0, 37.0], [316.0, 33.0], [305.0, 66.0], [315.0, 227.0], [328.0, 59.5], [322.0, 38.0], [321.0, 28.0], [329.0, 224.0], [332.0, 44.5], [324.0, 226.0], [327.0, 218.0], [342.0, 578.5], [336.0, 70.5], [345.0, 54.0], [337.0, 27.0], [344.0, 215.5], [358.0, 39.5], [365.0, 37.0], [366.0, 54.0], [382.0, 119.5], [383.0, 30.0], [371.0, 52.0], [377.0, 31.0], [379.0, 129.0], [376.0, 46.0], [380.0, 37.0], [374.0, 35.0], [369.0, 52.0], [370.0, 53.0], [372.0, 46.0], [373.0, 42.0], [384.0, 37.0], [398.0, 48.0], [397.0, 31.0], [387.0, 30.0], [390.0, 27.0], [386.0, 37.5], [394.0, 37.0], [413.0, 36.0], [409.0, 31.0], [410.0, 422.0], [400.0, 34.0], [404.0, 29.0], [402.0, 33.0], [412.0, 30.0], [407.0, 26.0], [406.0, 35.0], [414.0, 36.0], [420.0, 30.5], [431.0, 27.0], [427.0, 27.0], [416.0, 27.0], [450.0, 397.0], [460.0, 421.0], [453.0, 466.0], [452.0, 30.0], [477.0, 418.0], [508.0, 418.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 508.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 149.61666666666667, "minX": 1.76947788E12, "maxY": 337.98333333333335, "series": [{"data": [[1.769478E12, 193.18333333333334], [1.76947788E12, 149.61666666666667], [1.76947794E12, 337.98333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.769478E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 146.28333333333333, "minX": 1.76947788E12, "maxY": 337.98333333333335, "series": [{"data": [[1.769478E12, 196.51666666666668], [1.76947788E12, 146.28333333333333], [1.76947794E12, 337.98333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.769478E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 146.28333333333333, "minX": 1.76947788E12, "maxY": 337.98333333333335, "series": [{"data": [[1.769478E12, 196.51666666666668], [1.76947788E12, 146.28333333333333], [1.76947794E12, 337.98333333333335]], "isOverall": false, "label": "GET /characters (Page 1)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.769478E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 146.28333333333333, "minX": 1.76947788E12, "maxY": 337.98333333333335, "series": [{"data": [[1.769478E12, 196.51666666666668], [1.76947788E12, 146.28333333333333], [1.76947794E12, 337.98333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.769478E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

