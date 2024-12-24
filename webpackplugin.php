<?php
/**
 * plugin name: webpalc
 * plugin uri: shahadat.com.bd
 */
add_action('wp_enqueue_scripts', 'test');
function test() {
    // Enqueue the JavaScript file
    wp_enqueue_script(
        'dist', // Handle name
        plugin_dir_url(__FILE__) . 'assets/js/bundle.js', // Correct URL to the script
        [], // Dependencies (e.g., ['jquery'] if needed)
        '1.0.0', // Version
        true // Load in the footer
    );
    wp_enqueue_style(
        'sass', // Handle name
        plugin_dir_url(__FILE__) . 'assets/css/frontend.css', // Correct URL to the script
        [], // Dependencies (e.g., ['jquery'] if needed)
        '1.0.0', // Version
        'all'
    );
}
