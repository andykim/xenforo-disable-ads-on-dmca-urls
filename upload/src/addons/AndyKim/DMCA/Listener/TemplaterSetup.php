<?php

namespace AndyKim\DMCA\Listener;

use XF\Container;
use XF\Template\Templater;

/**
 * Class TemplaterSetup
 * @package AndyKim\DMCA\Listener
 */
class TemplaterSetup
{
    /**
     * @param Container $container
     * @param Templater $templater
     */
    public static function templaterSetup(Container $container, Templater &$templater)
    {
        $templater->addFunction('is_dmca', ['\AndyKim\DMCA\Listener\TemplaterSetup', 'isDmca']);
    }

    /**
     * Is DMCA
     *
     * @param Templater $templater
     * @param $escape
     * @param $entity
     * @return bool
     */
    public function isDmca(Templater $templater, &$escape, $entity): bool
    {
        $current_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        $urls = [];
        if (file_exists(dirname(__FILE__, 2) . '/dmca_urls.json')) {
            $content = @file_get_contents(dirname(__FILE__, 2) . '/dmca_urls.json');
            $urls = !empty($content)
                ? json_decode($content, true)
                : [];
        } else {
            // get options
            $options = \XF::options();
            if (
                property_exists($options, 'dmca_urls')
                && !empty($options->dmca_urls)
            ) {
                $urls = array_map("trim", array_unique(explode(PHP_EOL, $options->dmca_urls)));
            }
        }

        return in_array($current_url, $urls);
    }
}
