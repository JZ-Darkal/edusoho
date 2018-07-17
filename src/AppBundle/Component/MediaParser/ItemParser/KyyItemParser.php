<?php

namespace AppBundle\Component\MediaParser\ItemParser;

class KyyItemParser extends AbstractItemParser
{
    private $patterns = array(
        'p1' => '/^kyy:\/\/.+?[vod|live].*/s',
        // 'p1' => '/^https?:\/\/.+?[(\.mp4)|(\.swf)|(\.php)]/s',
    );

    public function parse($url)
    {
        $item = array();
        if(strpos(urldecode($url),'//vod')){   //判断是不是离线视频，vod表示离线视频，live表示直播视频
            $src = substr(urldecode($url),strlen('kyy://vod')+1);
            $url = 'http://mooc.kuangyeyuan.com/video/video.php?src='.urlencode('http://video.darkal.cn//p/103/sp/10300/playManifest/entryId/'.$src.'/format/applehttp/protocol/http/video.m3u8');
        }else{
            $url = 'http://mooc.kuangyeyuan.com/video/video.php?src='.urlencode('http://'.substr((urldecode($url)),strlen('kyy://live')+1)) ;
        }
        $item['id'] = md5($url);
        $item['uuid'] = 'Kyy:'.$item['id'];
        $item['type'] = 'video';
        $item['title'] = '';

        $item['url'] = $url;
        $item['name'] = '';
        $item['source'] = 'iframe';

        $item['files'] = array(
            array('url' => $url, 'type' => 'mp4'),
        );

        if (stripos($url, '.mp4') > 0) {
            $item['mp4_url'] = $url;
        } else {
            $item['swf_url'] = $url;
        }

        return $item;
    }

    public function detect($url)
    {
        return (bool) preg_match($this->patterns['p1'], $url);
    }
}
