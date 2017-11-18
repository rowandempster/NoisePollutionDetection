    // standard gmaps initialization
    var myLatlng = new google.maps.LatLng(48.3333, 16.35);
    
        // define map properties
        var myOptions = {
            zoom: 3,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: false,
            scrollwheel: true,
            draggable: true,
            navigationControl: true,
            mapTypeControl: false,
            scaleControl: true,
            disableDoubleClickZoom: false
        };
    
        // we'll use the heatmapArea 
        var map = new google.maps.Map($("#heatmapArea")[0], myOptions);
    
        // let's create a heatmap-overlay
        // with heatmap config properties
        var heatmap = new HeatmapOverlay(map, {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 2,
                "maxOpacity": 1,
            // scales the radius based on map zoom
            "scaleRadius": true,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries 
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": true,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count'
        });
    
        // here is our dataset
        // important: a datapoint now contains lat, lng and count property!
        var testData = {
            max: 100,
            data: [{
                lat: 48.3333,
                lng: 16.35,
                count: 100
            }, {
                lat: 51.465558,
                lng: 0.010986,
                count: 100
            }, {
                lat: 33.5363,
                lng: -5.044,
                count: 100
            }]
        };
    
    
        heatmap.setData(testData);