var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hypermarts1_1 = new ol.format.GeoJSON();
var features_Hypermarts1_1 = format_Hypermarts1_1.readFeatures(json_Hypermarts1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hypermarts1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hypermarts1_1.addFeatures(features_Hypermarts1_1);
var lyr_Hypermarts1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hypermarts1_1, 
                style: style_Hypermarts1_1,
                popuplayertitle: "Hypermarts1",
                interactive: true,
                title: '<img src="styles/legend/Hypermarts1_1.png" /> Hypermarts1'
            });
var format_Malls1_2 = new ol.format.GeoJSON();
var features_Malls1_2 = format_Malls1_2.readFeatures(json_Malls1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malls1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malls1_2.addFeatures(features_Malls1_2);
var lyr_Malls1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malls1_2, 
                style: style_Malls1_2,
                popuplayertitle: "Malls1",
                interactive: true,
                title: '<img src="styles/legend/Malls1_2.png" /> Malls1'
            });
var format_SalonsinMysuru1_3 = new ol.format.GeoJSON();
var features_SalonsinMysuru1_3 = format_SalonsinMysuru1_3.readFeatures(json_SalonsinMysuru1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SalonsinMysuru1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SalonsinMysuru1_3.addFeatures(features_SalonsinMysuru1_3);
var lyr_SalonsinMysuru1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SalonsinMysuru1_3, 
                style: style_SalonsinMysuru1_3,
                popuplayertitle: "Salons in Mysuru1",
                interactive: true,
                title: '<img src="styles/legend/SalonsinMysuru1_3.png" /> Salons in Mysuru1'
            });
var format_Playschools1_4 = new ol.format.GeoJSON();
var features_Playschools1_4 = format_Playschools1_4.readFeatures(json_Playschools1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Playschools1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Playschools1_4.addFeatures(features_Playschools1_4);
var lyr_Playschools1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Playschools1_4, 
                style: style_Playschools1_4,
                popuplayertitle: "Playschools1",
                interactive: true,
                title: '<img src="styles/legend/Playschools1_4.png" /> Playschools1'
            });

        var lyr_googletraffic_5 = new ol.layer.Tile({
            'title': 'google traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var format_PG_hostel_Coliving1_6 = new ol.format.GeoJSON();
var features_PG_hostel_Coliving1_6 = format_PG_hostel_Coliving1_6.readFeatures(json_PG_hostel_Coliving1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PG_hostel_Coliving1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PG_hostel_Coliving1_6.addFeatures(features_PG_hostel_Coliving1_6);
var lyr_PG_hostel_Coliving1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PG_hostel_Coliving1_6, 
                style: style_PG_hostel_Coliving1_6,
                popuplayertitle: "PG_hostel_Coliving1",
                interactive: true,
                title: '<img src="styles/legend/PG_hostel_Coliving1_6.png" /> PG_hostel_Coliving1'
            });
var lyr_Youngpop_Hos_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Young pop_Hos",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Youngpop_Hos_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8523819.646771, 1374783.731024, 8535319.646771, 1386963.716523]
                            })
                        });
var lyr_YoungPop_Sal_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Young Pop_Sal",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/YoungPop_Sal_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8523957.623877, 1372498.295032, 8537257.623877, 1387031.857884]
                            })
                        });
var lyr_Children_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Children",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Children_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8523818.121694, 1373601.372174, 8536818.121694, 1386906.963568]
                            })
                        });
var lyr_Hypermart_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hypermart",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hypermart_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8523969.657514, 1373396.318198, 8536669.657514, 1387111.312384]
                            })
                        });
var lyr_Mall_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mall",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mall_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8524401.499215, 1378131.379781, 8535501.499215, 1387241.332405]
                            })
                        });
var format_MysoreCity_12 = new ol.format.GeoJSON();
var features_MysoreCity_12 = format_MysoreCity_12.readFeatures(json_MysoreCity_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MysoreCity_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MysoreCity_12.addFeatures(features_MysoreCity_12);
var lyr_MysoreCity_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MysoreCity_12, 
                style: style_MysoreCity_12,
                popuplayertitle: "Mysore City",
                interactive: true,
                title: '<img src="styles/legend/MysoreCity_12.png" /> Mysore City'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Hypermarts1_1.setVisible(true);lyr_Malls1_2.setVisible(true);lyr_SalonsinMysuru1_3.setVisible(true);lyr_Playschools1_4.setVisible(true);lyr_googletraffic_5.setVisible(true);lyr_PG_hostel_Coliving1_6.setVisible(true);lyr_Youngpop_Hos_7.setVisible(true);lyr_YoungPop_Sal_8.setVisible(true);lyr_Children_9.setVisible(true);lyr_Hypermart_10.setVisible(true);lyr_Mall_11.setVisible(true);lyr_MysoreCity_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Hypermarts1_1,lyr_Malls1_2,lyr_SalonsinMysuru1_3,lyr_Playschools1_4,lyr_googletraffic_5,lyr_PG_hostel_Coliving1_6,lyr_Youngpop_Hos_7,lyr_YoungPop_Sal_8,lyr_Children_9,lyr_Hypermart_10,lyr_Mall_11,lyr_MysoreCity_12];
lyr_Hypermarts1_1.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Malls1_2.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SalonsinMysuru1_3.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Playschools1_4.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PG_hostel_Coliving1_6.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MysoreCity_12.set('fieldAliases', {'KGISVillag': 'KGISVillag', 'KGISVill_1': 'KGISVill_1', 'KGISVill_2': 'KGISVill_2', 'KGISHobliI': 'KGISHobliI', 'UniqueVill': 'UniqueVill', 'Bhucode': 'Bhucode', 'CensusVill': 'CensusVill', 'BhoomiVill': 'BhoomiVill', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'LGDGPCode': 'LGDGPCode', 'LGDGPCode_': 'LGDGPCode_', 'Category': 'Category', 'LGD_Villag': 'LGD_Villag', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Hypermarts1_1.set('fieldImages', {'Name': '', 'Address': '', 'Latitude': '', 'Longitude': '', });
lyr_Malls1_2.set('fieldImages', {'Name': '', 'Address': '', 'Latitude': '', 'Longitude': '', });
lyr_SalonsinMysuru1_3.set('fieldImages', {'Name': '', 'Address': '', 'Latitude': '', 'Longitude': '', });
lyr_Playschools1_4.set('fieldImages', {'Name': '', 'Address': '', 'Latitude': '', 'Longitude': '', });
lyr_PG_hostel_Coliving1_6.set('fieldImages', {'Name': '', 'Address': '', 'Latitude': '', 'Longitude': '', });
lyr_MysoreCity_12.set('fieldImages', {'KGISVillag': 'TextEdit', 'KGISVill_1': 'TextEdit', 'KGISVill_2': 'TextEdit', 'KGISHobliI': 'Range', 'UniqueVill': 'TextEdit', 'Bhucode': 'TextEdit', 'CensusVill': 'TextEdit', 'BhoomiVill': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'LGDGPCode': 'TextEdit', 'LGDGPCode_': 'TextEdit', 'Category': 'TextEdit', 'LGD_Villag': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Hypermarts1_1.set('fieldLabels', {'Name': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Malls1_2.set('fieldLabels', {'Name': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SalonsinMysuru1_3.set('fieldLabels', {'Name': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Playschools1_4.set('fieldLabels', {'Name': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PG_hostel_Coliving1_6.set('fieldLabels', {'Name': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_MysoreCity_12.set('fieldLabels', {'KGISVillag': 'inline label - always visible', 'KGISVill_1': 'no label', 'KGISVill_2': 'no label', 'KGISHobliI': 'no label', 'UniqueVill': 'no label', 'Bhucode': 'no label', 'CensusVill': 'no label', 'BhoomiVill': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'LGDGPCode': 'no label', 'LGDGPCode_': 'no label', 'Category': 'no label', 'LGD_Villag': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', });
lyr_MysoreCity_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});