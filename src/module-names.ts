import {siteFlow} from './flow/site';
import {moduleName} from './relationship-design';
for(const node of siteFlow.nodes.values())node.label=moduleName(node.id);
