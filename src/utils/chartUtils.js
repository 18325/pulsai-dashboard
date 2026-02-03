/**
 * Chart color palette configuration
 */
export const CHART_COLORS = {
    blue: '#3590E3',
    green: '#BAF09D',
    dark: '#6B7280',
    gray: '#F3F4F6',
    white: '#FFFFFF'
};

/**
 * Creates SVG path for area chart
 * @param {Array} data - Chart data points
 * @param {string} key - Data key to plot
 * @param {number} max - Maximum value for scaling
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 * @returns {string} SVG path string
 */
export const createAreaPath = (data, key, max, width, height) => {
    let path = `M 0,${height} `;
    data.forEach((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (d[key] / max) * height;
        path += `L ${x},${y} `;
    });
    path += `L ${width},${height} Z`;
    return path;
};

/**
 * Creates SVG line path for chart
 * @param {Array} data - Chart data points
 * @param {string} key - Data key to plot
 * @param {number} max - Maximum value for scaling
 * @param {number} width - SVG width
 * @param {number} height - SVG height
 * @returns {string} SVG path string
 */
export const createLinePath = (data, key, max, width, height) => {
    let path = '';
    data.forEach((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (d[key] / max) * height;
        path += i === 0 ? `M ${x},${y} ` : `L ${x},${y} `;
    });
    return path;
};

/**
 * Creates arc path for donut chart segment
 * @param {number} start - Start angle in radians
 * @param {number} end - End angle in radians
 * @param {number} radius - Circle radius
 * @param {number} cx - Center X coordinate (default: 20)
 * @param {number} cy - Center Y coordinate (default: 20)
 * @returns {string} SVG path string
 */
export const createArcPath = (start, end, radius = 16, cx = 20, cy = 20) => {
    const cosStart = Math.cos(start);
    const sinStart = Math.sin(start);
    const cosEnd = Math.cos(end);
    const sinEnd = Math.sin(end);
    // Round coordinates to 10 decimal places to prevent hydration mismatch
    const x1 = Math.round((cx + radius * cosStart) * 1e10) / 1e10;
    const y1 = Math.round((cy + radius * sinStart) * 1e10) / 1e10;
    const x2 = Math.round((cx + radius * cosEnd) * 1e10) / 1e10;
    const y2 = Math.round((cy + radius * sinEnd) * 1e10) / 1e10;
    const largeArc = end - start > Math.PI ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
};
