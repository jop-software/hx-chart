import {HtmxExtension} from "htmx.org";
import Chart from "chart.js/auto";
import type { ChartTypeRegistry } from "chart.js";

const HxChart: HtmxExtension = {
	onEvent(name, evt) {
		if (name === "htmx:afterProcessNode") {
			const element = <HTMLElement>evt.detail.elt;
			handleChart(element);
			element.querySelectorAll("[hx-chart], [data-hx-chart]").forEach(handleChart);
		}
	},
};

/**
 * Get attribute from element or data attribute.
 */
function getAttributeFromElement<T = string | null>(element: Element, attributeName: string) {
	return (element.getAttribute(attributeName) || element.getAttribute("data-" + attributeName)) as T;
}

/**
 * Get attribute from element or data attribute.
 */
function elementHasAttribute(element: Element, attributeName: string) {
	return (element.hasAttribute(attributeName) || element.hasAttribute("data-" + attributeName));
}


function handleChart(element: Element) {
	if (!elementHasAttribute(element, "hx-chart")) {
		return;
	}

	if (! (element instanceof HTMLCanvasElement)) {
		console.error("[HX-CHART] Element is not a canvas.", element);
		return;
	}

	const type = getAttributeFromElement<keyof ChartTypeRegistry>(element, "hx-chart-type") || "pie";

	const stringDatasets = getAttributeFromElement(element, "hx-chart-datasets") || "[]";
	const datasets = JSON.parse(stringDatasets);

	const stringLabels = getAttributeFromElement(element, "hx-chart-labels") || "[]";
	const labels = JSON.parse(stringLabels);

	new Chart(
		element,
		{
			type,
			data: {
				labels,
				datasets: datasets
			}
		}
	);
}

export default HxChart;
