<?php

namespace QiQiuYun\SDK\Service;

use QiQiuYun\SDK\Exception\SDKException;

class ESopService extends BaseService
{
    protected $host = 'esop-service.qiqiuyun.net';

    private $siteTracePath = '/api/v1/site_trace';
    
    public function getTraceScript($data)
    {
        return $this->request('POST', $this->siteTracePath, $data);
    }
}