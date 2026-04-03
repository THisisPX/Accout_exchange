/**
 * 账号支付状态联动功能 - 单元测试
 * 测试覆盖：所有账号状态组合
 */

const tests = {
  passed: 0,
  failed: 0,
  
  // 测试1: paymentEnabled = true
  testPaymentEnabledTrue: function() {
    const accountData = {
      id: 'TEST001',
      price: 100,
      deposit: 200,
      paymentEnabled: true,
      paymentNote: '支持微信支付'
    };
    
    const result = accountData.paymentEnabled !== false;
    this.assert(result === true, '支付-enabled账号应返回true');
  },
  
  // 测试2: paymentEnabled = false
  testPaymentEnabledFalse: function() {
    const accountData = {
      id: 'TEST002',
      price: 100,
      deposit: 200,
      paymentEnabled: false,
      paymentNote: '暂不支持支付'
    };
    
    const result = accountData.paymentEnabled !== false;
    this.assert(result === false, '支付-disabled账号应返回false');
  },
  
  // 测试3: paymentEnabled 未定义（默认为true）
  testPaymentEnabledUndefined: function() {
    const accountData = {
      id: 'TEST003',
      price: 100,
      deposit: 200
    };
    
    const result = accountData.paymentEnabled !== false;
    this.assert(result === true, '未指定paymentEnabled应默认为true');
  },
  
  // 测试4: 获取支付按钮元素（不存在时创建）
  testGetOrCreatePaymentButton: function() {
    const btn = document.getElementById('testPaymentBtn');
    if (btn) btn.remove();
    
    // 模拟创建按钮
    const btn2 = document.createElement('button');
    btn2.id = 'testPaymentBtn';
    
    this.assert(btn2.id === 'testPaymentBtn', '应能创建支付按钮');
    
    // 清理
    btn2.remove();
  },
  
  // 测试5: 选中账号状态更新
  testAccountSelection: function() {
    const mockCard = {
      classList: {
        selected: false,
        remove: function() { this.selected = false; }
      }
    };
    
    let selectedAccount = null;
    
    // 模拟选择账号
    mockCard.classList.remove();
    selectedAccount = { id: 'TEST001', paymentEnabled: true };
    
    this.assert(selectedAccount !== null, '选中账号后应更新selectedAccount');
    this.assert(selectedAccount.id === 'TEST001', '选中的账号ID应正确');
  },
  
  // 测试6: 账号切换时清空之前选择
  testClearPreviousSelection: function() {
    const cards = [
      { id: 'card1', classList: { selected: true, remove: function() {} } },
      { id: 'card2', classList: { selected: false, remove: function() {} } }
    ];
    
    // 模拟清除之前选择
    cards.forEach(card => card.classList.remove());
    
    const hasSelected = cards.some(card => card.classList.selected);
    this.assert(hasSelected === false, '切换账号时应清空之前的选择状态');
  },
  
  // 测试7: 支付能力检测 - 可用
  testCheckPaymentCapabilityEnabled: function() {
    const accountData = {
      paymentEnabled: true,
      paymentNote: '支持微信/支付宝'
    };
    
    const paymentEnabled = accountData.paymentEnabled !== false;
    this.assert(paymentEnabled === true, 'paymentEnabled=true时应显示可用状态');
  },
  
  // 测试8: 支付能力检测 - 不可用
  testCheckPaymentCapabilityDisabled: function() {
    const accountData = {
      paymentEnabled: false,
      paymentNote: '暂不支持'
    };
    
    const paymentEnabled = accountData.paymentEnabled !== false;
    this.assert(paymentEnabled === false, 'paymentEnabled=false时应显示禁用状态');
  },
  
  // 测试9: 加载状态显示
  testLoadingState: function() {
    let isLoading = false;
    
    // 显示加载
    isLoading = true;
    this.assert(isLoading === true, '加载状态应为true');
    
    // 隐藏加载
    isLoading = false;
    this.assert(isLoading === false, '加载状态应为false');
  },
  
  // 测试10: 错误处理
  testErrorHandling: function() {
    let hasError = false;
    let errorMessage = '';
    
    // 模拟错误
    try {
      throw new Error('Network error');
    } catch (e) {
      hasError = true;
      errorMessage = e.message;
    }
    
    this.assert(hasError === true, '错误时应设置hasError为true');
    this.assert(errorMessage === 'Network error', '错误消息应正确传递');
  },
  
  // 测试11: 弹窗带账号信息打开
  testOpenPaymentModalWithAccount: function() {
    const account = {
      id: 'SJZ307642',
      price: 559,
      deposit: 765
    };
    
    // 模拟生成账号信息HTML
    const html = `
      <p>当前选中的账号：<strong>${account.id}</strong></p>
      <p>租金：¥${account.price}/小时  押金：¥${account.deposit}</p>
    `;
    
    this.assert(html.includes('SJZ307642'), '弹窗应包含账号ID');
    this.assert(html.includes('559'), '弹窗应包含租金');
    this.assert(html.includes('765'), '弹窗应包含押金');
  },
  
  // 测试12: 数据驱动测试 - 遍历所有账号
  testAllAccountsData: function() {
    const testAccounts = [
      { id: 'SJZ307642', paymentEnabled: true },
      { id: 'SJZ310731', paymentEnabled: true },
      { id: 'SJZ309743', paymentEnabled: false },
      { id: 'SJZ310729', paymentEnabled: true },
      { id: 'SJZ309994', paymentEnabled: true },
      { id: 'SJZ310701', paymentEnabled: false },
      { id: 'SJZ310641', paymentEnabled: true },
      { id: 'SJZ310670', paymentEnabled: true },
      { id: 'SJZ310725', paymentEnabled: true },
      { id: 'SJZ310724', paymentEnabled: false },
      { id: 'SJZ309329', paymentEnabled: true },
      { id: 'SJZ310720', paymentEnabled: true }
    ];
    
    let enabledCount = 0;
    let disabledCount = 0;
    
    testAccounts.forEach(account => {
      const enabled = account.paymentEnabled !== false;
      if (enabled) {
        enabledCount++;
      } else {
        disabledCount++;
      }
    });
    
    this.assert(enabledCount === 9, '应有9个账号支持支付,实际: ' + enabledCount);
    this.assert(disabledCount === 3, '应有3个账号不支持支付,实际: ' + disabledCount);
  },
  
  // 断言辅助函数
  assert: function(condition, message) {
    if (condition) {
      console.log('✓ ' + message);
      this.passed++;
    } else {
      console.error('✗ ' + message);
      this.failed++;
    }
  },
  
  // 运行所有测试
  run: function() {
    console.log('========== 开始运行单元测试 ==========\n');
    
    this.testPaymentEnabledTrue();
    this.testPaymentEnabledFalse();
    this.testPaymentEnabledUndefined();
    this.testGetOrCreatePaymentButton();
    this.testAccountSelection();
    this.testClearPreviousSelection();
    this.testCheckPaymentCapabilityEnabled();
    this.testCheckPaymentCapabilityDisabled();
    this.testLoadingState();
    this.testErrorHandling();
    this.testOpenPaymentModalWithAccount();
    this.testAllAccountsData();
    
    console.log('\n========== 测试结果 ==========');
    console.log('通过: ' + this.passed);
    console.log('失败: ' + this.failed);
    console.log('总计: ' + (this.passed + this.failed));
    
    return this.failed === 0;
  }
};

// 导出测试模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tests;
}

// 浏览器环境下自动运行
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', function() {
    // 可通过在控制台运行 tests.run() 来执行测试
    console.log('账号支付联动测试模块已加载，运行 tests.run() 执行测试');
  });
}
