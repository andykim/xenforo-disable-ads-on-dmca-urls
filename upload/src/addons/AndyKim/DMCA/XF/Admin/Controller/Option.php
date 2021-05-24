<?php
namespace AndyKim\DMCA\XF\Admin\Controller;

class Option extends XFCP_Option
{
    public function actionUpdate()
    {
        if(isset($_REQUEST['options']))
        {
            foreach ($_REQUEST['options'] as $option_id => $option_value) {
                if($option_id == "dmca_urls"){
                    $urls = array_unique(explode(PHP_EOL, $option_value));
                    file_put_contents(dirname(__FILE__, 4). '/dmca_urls.json', json_encode(array_map("trim", $urls)));
                }
            }
        }

        return parent::actionUpdate();
    }
}
if(false)
{
    class XFCP_Option extends \XF\Admin\Controller\Option {};
}