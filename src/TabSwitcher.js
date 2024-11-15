import React from 'react';

const TabSwitcher = ({ activeTab, onTabSwitch }) => (
    <div className="tabs">
        <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => onTabSwitch('register')}
        >
            Register
        </button>
        <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => onTabSwitch('login')}
        >
            Sign In
        </button>
    </div>
);

export default TabSwitcher;
