'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductAsideMenu({ 
  productConfig,
  activeItem,
  activeSubItem,
  showSubmenu,
  onMainItemClick,
  onSubItemClick,
  onSubItemSelection
}) {
  const [activeDropdowns, setActiveDropdowns] = useState({
    'Concrete Roof': {
      'Flat Tile': false,
      'Genteng Gelombang': false
    },
    'Concrete Block': {
      'Ventilation Block': false
    },
    'Utility': {}
  });

  // Helper functions
  const getMainProducts = () => productConfig.mainProducts.map(item => item.name);
  const getSubProducts = (category) => productConfig.subProducts[category]?.map(item => item.name) || [];
  const getSubItems = (category, subProduct) => {
    const product = productConfig.subProducts[category]?.find(item => item.name === subProduct);
    return product?.subItems || [];
  };

  const getMainProductUrl = (name) => {
    return productConfig.mainProducts.find(item => item.name === name)?.url || '#';
  };

  const getSubProductUrl = (category, name) => {
    const subProducts = productConfig.subProducts[category];
    if (!subProducts) return '#';
    const product = subProducts.find(item => item.name === name);
    return product?.url || '#';
  };

  const getSubItemUrl = (category, subProduct, subItemName) => {
    const product = productConfig.subProducts[category]?.find(item => item.name === subProduct);
    const subItem = product?.subItems?.find(item => item.name === subItemName);
    return subItem?.url || '#';
  };

  const toggleDropdown = (category, subItem) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [category]: {
        ...Object.fromEntries(
          Object.keys(prev[category]).map(key => [key, false])
        ),
        [subItem]: !prev[category]?.[subItem]
      }
    }));
  };

  const handleSubItemClick = (category, subItem) => {
    const subItems = getSubItems(category, subItem);
    if (subItems.length > 0) {
      toggleDropdown(category, subItem);
    } else {
      onSubItemClick(subItem);
    }
  };

  // Initialize from sessionStorage
  useEffect(() => {
    const storedSubItem = sessionStorage.getItem('activeSubItem');
    if (storedSubItem) {
      for (const category in productConfig.subProducts) {
        for (const product of productConfig.subProducts[category]) {
          if (product.subItems) {
            const found = product.subItems.find(item => item.name === storedSubItem);
            if (found) {
              setActiveDropdowns(prev => ({
                ...prev,
                [category]: {
                  ...prev[category],
                  [product.name]: true
                }
              }));
              return;
            }
          }
        }
      }
    }
  }, []);

  return (
    <aside className="w-full lg:w-1/6 lg:sticky lg:top-[6.5rem] lg:h-[calc(100vh-6.5rem)] lg:overflow-y-auto">
      <h1 className="text-lg font-medium mb-4 pb-2">Produk</h1>
      <ul className="space-y-2 text-sm">
        {getMainProducts().map((item) => (
          <li key={item}>
            <Link
              href={getMainProductUrl(item)}
              onClick={() => onMainItemClick(item)}
              className={`w-full text-left px-2 cursor-pointer ${
                activeItem === item
                  ? 'text-[#2957A4] border-l-2 border-[#2957A4] font-semibold'
                  : 'text-gray-700 hover:text-[#3a4557]'
              }`}
            >
              {item}
            </Link>

            {showSubmenu && activeItem === item && (
              <ul className="ml-4 mt-2 space-y-3 text-gray-600 text-xs border-l border-gray-300 pl-2 mb-4">
                {getSubProducts(item).map((sub) => {
                  const subItems = getSubItems(item, sub);
                  const hasSubItems = subItems.length > 0;
                  const isDropdownOpen = activeDropdowns[item]?.[sub] || false;

                  return (
                    <li key={sub}>
                      {hasSubItems ? (
                        <>
                          <div 
                            onClick={() => handleSubItemClick(item, sub)}
                            className={`block cursor-pointer ${
                              isDropdownOpen || activeSubItem === sub
                                ? 'text-[#2957A4] font-medium'
                                : 'hover:text-[#2957A4]'
                            }`}
                          >
                            {sub}
                          </div>
                          {isDropdownOpen && (
                            <ul className="ml-4 mt-1 space-y-2">
                              {subItems.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link 
                                    href={getSubItemUrl(item, sub, subItem.name)}
                                    onClick={() => onSubItemSelection(subItem.name)}
                                    className={`block cursor-pointer ${
                                      activeSubItem === subItem.name
                                        ? 'text-[#2957A4] font-medium'
                                        : 'hover:text-[#2957A4]'
                                    }`}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link 
                          href={getSubProductUrl(item, sub)}
                          onClick={() => onSubItemClick(sub)}
                          className={`block cursor-pointer ${
                            activeSubItem === sub
                              ? 'text-[#2957A4] font-medium'
                              : 'hover:text-[#2957A4]'
                          }`}
                        >
                          {sub}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}