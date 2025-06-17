var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ccaa3857_1 = new ol.format.GeoJSON();
var features_ccaa3857_1 = format_ccaa3857_1.readFeatures(json_ccaa3857_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ccaa3857_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ccaa3857_1.addFeatures(features_ccaa3857_1);
var lyr_ccaa3857_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ccaa3857_1, 
                style: style_ccaa3857_1,
                popuplayertitle: 'ccaa3857',
                interactive: true,
                title: '<img src="styles/legend/ccaa3857_1.png" /> ccaa3857'
            });
var format_parquesnac3857_2 = new ol.format.GeoJSON();
var features_parquesnac3857_2 = format_parquesnac3857_2.readFeatures(json_parquesnac3857_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parquesnac3857_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parquesnac3857_2.addFeatures(features_parquesnac3857_2);
var lyr_parquesnac3857_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parquesnac3857_2, 
                style: style_parquesnac3857_2,
                popuplayertitle: 'parquesnac3857',
                interactive: true,
                title: '<img src="styles/legend/parquesnac3857_2.png" /> parquesnac3857'
            });
var format_rios3857_3 = new ol.format.GeoJSON();
var features_rios3857_3 = format_rios3857_3.readFeatures(json_rios3857_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios3857_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios3857_3.addFeatures(features_rios3857_3);
var lyr_rios3857_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios3857_3, 
                style: style_rios3857_3,
                popuplayertitle: 'rios3857',
                interactive: true,
                title: '<img src="styles/legend/rios3857_3.png" /> rios3857'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ccaa3857_1.setVisible(true);lyr_parquesnac3857_2.setVisible(true);lyr_rios3857_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ccaa3857_1,lyr_parquesnac3857_2,lyr_rios3857_3];
lyr_ccaa3857_1.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', });
lyr_parquesnac3857_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', });
lyr_rios3857_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', });
lyr_ccaa3857_1.set('fieldImages', {'ID': '', 'TIPO_0101': '', 'CODIGO_INE': '', 'ETIQUETA': '', 'COD_INE': '', 'TOT_FOR': '', 'ARB': '', 'NO_ARB': '', });
lyr_parquesnac3857_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Declaracio': '', 'Reclasific': '', 'Ampliacion': '', 'Fecha de d': '', 'Modificaci': '', });
lyr_rios3857_3.set('fieldImages', {'OBJECTID': '', 'Texto': '', 'Longitud': '', 'Categoria': '', 'Imagen': '', 'Shape_Leng': '', });
lyr_ccaa3857_1.set('fieldLabels', {'ID': 'no label', 'TIPO_0101': 'no label', 'CODIGO_INE': 'no label', 'ETIQUETA': 'header label - always visible', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'no label', 'NO_ARB': 'no label', });
lyr_parquesnac3857_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', });
lyr_rios3857_3.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'header label - always visible', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', });
lyr_rios3857_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});