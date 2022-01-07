# Google-Map
Custom Google Map for a business

[WATCH](https://www.awesomescreenshot.com/video/6744897?key=4a6ccb3089afc5ab720dd38fcb9dc8c1)


We will build this

![This is an image](https://woocommerce-427276-1719000.cloudwaysapps.com/wp-content/uploads/2022/01/googlemap.png)

You must need a google map api.

#### In WordPress functions.php file, you can use following:
```
wp_enqueue_script( THEME_TEXTDOMAIN . '-googlemappolyfill', 'https://polyfill.io/v3/polyfill.min.js?features=default', null, false, true );
wp_enqueue_script( THEME_TEXTDOMAIN . '-googlemap', get_stylesheet_directory_uri() . '/assets/theme/js/googlemap.js', null, false, true );
wp_enqueue_script( THEME_TEXTDOMAIN . '-googlemapapi', 'https://maps.googleapis.com/maps/api/js?key=YOURGOOGLEMAPAPIKEYHERE&callback=initMap', null, false, true );
```

1. Add `<div id="map"></div>` in your html file.
2. Write custom javscript code and add the path in your html file. 
3. Add `googlemapapikey` path and `pollyfill.min.js` path in your html file.
4. I guess thats it! 
