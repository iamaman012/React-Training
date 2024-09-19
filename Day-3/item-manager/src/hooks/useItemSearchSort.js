
import { useState, useEffect } from 'react';

const useItemSearchSort = (items, searchTerm, sortCriteria, sortOrder) => {
  const [filteredAndSortedItems, setFilteredAndSortedItems] = useState([]);

  useEffect(() => {
    // Filter items based on the search term
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort filtered items based on the selected criteria and order
    const sortedItems = filteredItems.sort((a, b) => {
      let comparison = 0;
      if (sortCriteria === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortCriteria === 'description') {
        comparison = a.description.localeCompare(b.description);
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredAndSortedItems(sortedItems);
  }, [items, searchTerm, sortCriteria, sortOrder]);

  return filteredAndSortedItems;
};

export default useItemSearchSort;
