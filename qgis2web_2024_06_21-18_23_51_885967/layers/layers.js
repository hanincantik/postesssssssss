var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_1.png" /> Kecamatan Genteng'
            });
var format_d_JaringanJalan_Fixed_2 = new ol.format.GeoJSON();
var features_d_JaringanJalan_Fixed_2 = format_d_JaringanJalan_Fixed_2.readFeatures(json_d_JaringanJalan_Fixed_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_JaringanJalan_Fixed_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_JaringanJalan_Fixed_2.addFeatures(features_d_JaringanJalan_Fixed_2);
var lyr_d_JaringanJalan_Fixed_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_JaringanJalan_Fixed_2, 
                style: style_d_JaringanJalan_Fixed_2,
                popuplayertitle: "d_JaringanJalan_Fixed",
                interactive: true,
                title: '<img src="styles/legend/d_JaringanJalan_Fixed_2.png" /> d_JaringanJalan_Fixed'
            });
var format_d_Halte_Surabaya_3 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_3 = format_d_Halte_Surabaya_3.readFeatures(json_d_Halte_Surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_3.addFeatures(features_d_Halte_Surabaya_3);
var lyr_d_Halte_Surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_3, 
                style: style_d_Halte_Surabaya_3,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
                title: '<img src="styles/legend/d_Halte_Surabaya_3.png" /> d_Halte_Surabaya'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_d_JaringanJalan_Fixed_2.setVisible(true);lyr_d_Halte_Surabaya_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KecamatanGenteng_1,lyr_d_JaringanJalan_Fixed_2,lyr_d_Halte_Surabaya_3];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas_Terja': 'Luas_Terja', 'Persentase': 'Persentase', });
lyr_d_JaringanJalan_Fixed_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_d_Halte_Surabaya_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas_Terja': '', 'Persentase': '', });
lyr_d_JaringanJalan_Fixed_2.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_d_Halte_Surabaya_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'header label - visible with data', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Luas_Terja': 'no label', 'Persentase': 'inline label - always visible', });
lyr_d_JaringanJalan_Fixed_2.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'no label', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', 'width': 'inline label - always visible', 'highway': 'inline label - always visible', 'surface': 'no label', 'railway': 'inline label - always visible', 'layer': 'no label', 'oneway': 'inline label - visible with data', 'name': 'inline label - visible with data', 'smoothness': 'no label', });
lyr_d_Halte_Surabaya_3.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', });
lyr_d_Halte_Surabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});