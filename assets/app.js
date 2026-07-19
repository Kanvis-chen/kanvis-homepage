(() => {
  const body = document.body;
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const courseDialog = document.querySelector('[data-course-dialog]');
  const serviceDialog = document.querySelector('[data-service-dialog-modal]');
  const serviceDialogTitle = document.querySelector('[data-service-dialog-title]') || document.querySelector('#service-dialog-title');
  const serviceDialogSummary = document.querySelector('[data-service-dialog-summary]');
  const serviceDialogList = document.querySelector('[data-service-dialog-list]');

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const setMenu = (open) => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
    body.classList.toggle('menu-open', open);
  };

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) setMenu(false);
  });

  const closeCourseDialog = () => {
    if (courseDialog?.open) courseDialog.close();
  };

  document.querySelector('[data-course-dialog-open]')?.addEventListener('click', () => {
    if (typeof courseDialog?.showModal === 'function') courseDialog.showModal();
    else courseDialog?.setAttribute('open', '');
  });

  document.querySelectorAll('[data-course-dialog-close]').forEach((button) => {
    button.addEventListener('click', closeCourseDialog);
  });

  courseDialog?.addEventListener('click', (event) => {
    if (event.target === courseDialog) closeCourseDialog();
  });

  const serviceDetails = {
    business: {
      title: 'AI商业化落地实践 28天陪跑',
      summary: '28天围绕一个真实的内容获客或 AI 系统落地问题，陪你把目标、流程和工具接起来，完成一轮可执行、可复盘的实践。',
      items: ['明确内容获客、AI应用或经营效率目标', '搭建人和AI共同协作的工作流程与系统', '完成一个可运行版本，并确定下一轮迭代']
    },
    diagnosis: {
      title: '经营问题快诊 · ¥299 / 30分钟',
      summary: '这是一个单一问题快诊，不是无限答疑或陪跑服务。适合先判断一个经营、获客或 AI 应用问题的优先级。',
      items: ['课前提交一个真实经营问题与必要背景', '30分钟线上快诊与优先级判断', '输出三条下一步建议；符合条件升级陪跑可抵扣', '先确认服务与付款，再使用页面中的付费咨询二维码添加并备注']
    },
    enterprise: {
      title: '企业需求沟通',
      summary: '先了解你的业务目标、现有流程和希望 AI 解决的问题，再判断是否适合进入培训、系统定制或协作流程落地。',
      items: ['说明获客、AI应用、协作效率或数据连接需求', '补充团队角色、现有工具和当前卡点', '合作方式、范围与预算在沟通后另行确认']
    },
    brand: {
      title: '品牌合作沟通',
      summary: '如果你希望与 Kanvis 讨论产品体验、品牌推广或生态合作，可以先介绍合作目标与基本背景。',
      items: ['说明产品、品牌或活动的合作目标', '补充预算、时间与希望触达的人群', '合作方式、范围与报价在沟通后另行确认']
    }
  };

  const closeServiceDialog = () => {
    if (serviceDialog?.open) serviceDialog.close();
  };

  document.querySelectorAll('[data-service-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const detail = serviceDetails[button.dataset.serviceOpen];
      if (!detail || !serviceDialog) return;
      if (serviceDialogTitle) serviceDialogTitle.textContent = detail.title;
      if (serviceDialogSummary) serviceDialogSummary.textContent = detail.summary;
      if (serviceDialogList) {
        serviceDialogList.replaceChildren(...detail.items.map((item) => {
          const listItem = document.createElement('li');
          listItem.textContent = item;
          return listItem;
        }));
      }
      if (typeof serviceDialog.showModal === 'function') serviceDialog.showModal();
      else serviceDialog.setAttribute('open', '');
    });
  });

  document.querySelectorAll('[data-service-dialog-close]').forEach((button) => {
    button.addEventListener('click', closeServiceDialog);
  });

  serviceDialog?.addEventListener('click', (event) => {
    if (event.target === serviceDialog) closeServiceDialog();
  });
})();
