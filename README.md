<div align="center">
    <h1><code>@jop-software/hx-chart</code> - chart.js as an htmx.org plugin</h1>
</div>

> Use [chart.js](https://www.chartjs.org/) as an extension in HTMX.

## Installation

```console
# npm
npm install @jop-software/hx-chart

# pnpm
pnpm add @jop-software/hx-chart
```

Make sure to include `chart.js` as well as `htmx.org` separately.

## Usage

```javascript
import "@jop-software/hx-chart";
```

```html
<canvas
    hx-ext="hx-chart"
    hx-chart
    hx-chart-type="pie"
    hx-chart-labels='["40%", "60%"]'
    hx-chart-datasets='[{"data": ["40","60"], "backgroundColor": ["#dc3545", "#28a745"]}]'
></canvas>
```


## Professional support and Enterprise Licensing

Professional support, as well as enterprise licenses are available. Please contact [support@jop-software.de](mailto:support@jop-software.de) for more information.

<div align=center>&copy 2023, <a href="https://jop-software.de">jop-software Inh. Johannes Przymusinski</a></div>
