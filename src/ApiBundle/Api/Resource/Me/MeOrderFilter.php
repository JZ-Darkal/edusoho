<?php

namespace ApiBundle\Api\Resource\Me;

use ApiBundle\Api\Resource\Filter;
use ApiBundle\Api\Util\AssetHelper;

class MeOrderFilter extends Filter
{
    protected $simpleFields = array(
        'id', 'title', 'sn', 'pay_amount', 'created_time', 'status', 'cover', 'targetType',
    );

    protected function simpleFields(&$data)
    {
        if (0 === strpos($data['cover']['middle'], '/assets') && '' !== $data['cover']) {
            $data['cover']['small'] = AssetHelper::uriForPath($data['cover']['small']);
            $data['cover']['middle'] = AssetHelper::uriForPath($data['cover']['middle']);
            $data['cover']['large'] = AssetHelper::uriForPath($data['cover']['large']);
        } else {
            $data['cover']['small'] = AssetHelper::getFurl(empty($data['cover']['small']) ? '' : $data['cover']['small'], $data['targetType'].'.png');
            $data['cover']['middle'] = AssetHelper::getFurl(empty($data['cover']['middle']) ? '' : $data['cover']['middle'], $data['targetType'].'.png');
            $data['cover']['large'] = AssetHelper::getFurl(empty($data['cover']['large']) ? '' : $data['cover']['large'], $data['targetType'].'.png');
        }
    }
}
