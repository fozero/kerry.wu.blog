
'use client';
import { Button } from 'antd';
import CustomComp from "./CustomComp";
import { useTranslation } from "react-i18next";

const Demo = ()=> {

    const { t } = useTranslation();

    return (
        <div>
            <CustomComp/>
            <Button type="primary">{t('title')}</Button>
        </div>
    )
}

export default Demo