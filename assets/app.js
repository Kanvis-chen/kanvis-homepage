(() => {
  const body = document.body;
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const courseDialog = document.querySelector('[data-course-dialog]');
  const serviceDialog = document.querySelector('[data-service-dialog-modal]');
  const serviceDialogTitle = document.querySelector('[data-service-dialog-title]') || document.querySelector('#service-dialog-title');
  const serviceDialogSummary = document.querySelector('[data-service-dialog-summary]');
  const serviceDialogList = document.querySelector('[data-service-dialog-list]');
  const serviceDialogNote = document.querySelector('[data-service-dialog-note]');

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
      items: ['明确内容获客、AI应用或经营效率目标', '搭建人和AI共同协作的工作流程与系统', '完成一个可运行版本，并确定下一轮迭代'],
      note: '如果你已经明确一个要推进的目标，并愿意在 28 天内持续行动与复盘，这项服务更合适。开始时间与合作方式将在沟通后确认。'
    },
    diagnosis: {
      title: '经营问题快诊 · ¥299 / 30分钟',
      summary: '聚焦一个真实的经营、获客或 AI 应用问题，帮助你快速判断优先级和下一步。',
      items: ['课前提交一个真实经营问题与必要背景', '30分钟线上快诊与优先级判断', '输出三条下一步建议；后续进入28天陪跑可抵扣本次费用'],
      note: '适合希望快速判断优先级的人；如果问题需要长期执行，会建议进入更适合的合作方式。'
    },
    enterprise: {
      title: '企业 AI 赋能与系统落地',
      summary: '从业务目标和现有流程出发，先识别值得 AI 介入的高价值场景，再选择诊断、培训或单场景试点。',
      items: ['AI 应用与业务流程诊断，明确优先级与落地路径', '半天或全天实操培训、岗位 Agent 与人机协作流程设计', '内容生产、获客、知识库、飞书或 CRM 连接等单场景试点', '沟通前请准备企业与团队背景、当前流程和工具、目标、时间与预算范围'],
      note: '请带上企业背景、当前流程与预期目标；沟通后确认合作范围、周期与报价。'
    },
    brand: {
      title: 'AI 产品、品牌与商务合作',
      summary: '适合希望围绕 AI 产品体验、内容共创、品牌发布或生态资源建立正式合作的团队。',
      items: ['可沟通产品体验、独立测评、教程、案例和品牌内容共创', '可沟通新品发布、线上活动、Skill 生态与联合项目合作', '请提供产品或品牌介绍、目标受众、合作目标、上线时间、交付形式与预算范围', '合作内容会基于真实体验，并明确合作关系'],
      note: '请带上产品介绍、目标受众、上线时间与合作预算；沟通后确认合作形式与报价。'
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
      if (serviceDialogNote) serviceDialogNote.textContent = detail.note;
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
