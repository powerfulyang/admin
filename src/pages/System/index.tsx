/** @jsxRuntime classic */
import microApp from '@micro-zoe/micro-app';
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { history, useLocation } from '@umijs/max';
import { useEffect, useState } from 'react';
import { system } from '@/global';

// @ts-ignore
window.jsxCustomEvent = jsxCustomEvent;

const System = () => {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      microApp.forceSetData(system.name, {
        location: `${location.pathname}${location.search}`,
        history,
      });
    }
  }, [isReady, location.pathname, location.search]);

  return (
    <micro-app
      {...system}
      onMounted={() => {
        setIsReady(true);
      }}
      onBeforeShow={() => {
        setIsReady(true);
      }}
      onAfterHidden={() => {
        setIsReady(false);
      }}
    />
  );
};

export default System;
