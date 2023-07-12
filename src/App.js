import React, { useCallback } from "react";

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
  ConnectionMode,
} from "reactflow";

import SimpleFloatingEdge from "./SimpleFloatingEdge";
import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";

import "./App.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 500, y: 100 },
    data: { label: "1" },
    type: "custom",
  },
  {
    id: "2",
    position: { x: 500, y: 200 },
    data: { label: "2" },
    type: "custom",
  },
  {
    id: "3",
    position: { x: 470, y: 400 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "4",
    position: { x: 500, y: 500 },
    data: { label: "4" },
    type: "custom",
  },
  /////
  {
    id: "5",
    position: { x: 200, y: 200 },
    data: { label: "5" },
    type: "custom",
  },
  {
    id: "6",
    position: { x: 700, y: 200 },
    data: { label: "6" },
    type: "custom",
  },
  {
    id: "7",
    position: { x: 1000, y: 200 },
    data: { label: "7" },
    type: "custom",
  },
  {
    id: "8",
    position: { x: 850, y: 300 },
    data: { label: "8" },
    type: "custom",
  },
  {
    id: "9",
    position: { x: 850, y: 400 },
    data: { label: "9" },
    type: "custom",
  },
  {
    id: "10",
    position: { x: 300, y: 500 },
    data: { label: "10" },
    type: "custom",
  },
  /////
  {
    id: "11",
    position: { x: -100, y: 600 },
    data: { label: "11" },
    type: "custom",
  },
  {
    id: "12",
    position: { x: 300, y: 600 },
    data: { label: "12" },
    type: "custom",
  },
  {
    id: "13",
    position: { x: 50, y: 700 },
    data: { label: "13" },
    type: "custom",
  },
  {
    id: "14",
    position: { x: 250, y: 700 },
    data: { label: "14" },
    type: "custom",
  },
  {
    id: "15",
    position: { x: 200, y: 800 },
    data: { label: "15" },
    type: "custom",
  },
  {
    id: "16",
    position: { x: 250, y: 900 },
    data: { label: "16" },
    type: "custom",
  },
  {
    id: "17",
    position: { x: 100, y: 1000 },
    data: { label: "17" },
    type: "custom",
  },
  //////

  {
    id: "18",
    position: { x: 850, y: 800 },
    data: { label: "18" },
    type: "custom",
  },
  {
    id: "19",
    position: { x: 850, y: 900 },
    data: { label: "19" },
    type: "custom",
  },
  {
    id: "20",
    position: { x: 1050, y: 900 },
    data: { label: "20" },
    type: "custom",
  },
  {
    id: "21",
    position: { x: 750, y: 1000 },
    data: { label: "21" },
    type: "custom",
  },
  {
    id: "22",
    position: { x: 750, y: 1100 },
    data: { label: "22" },
    type: "custom",
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },

  {
    id: "e6-3",
    source: "6",
    target: "3",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e7-3",
    source: "7",
    target: "3",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e5-3",
    source: "5",
    target: "3",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e8-9",
    source: "8",
    target: "9",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e7-9",
    source: "7",
    target: "9",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },

  {
    id: "e5-13",
    source: "5",
    target: "13",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e11-13",
    source: "11",
    target: "13",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e5-15",
    source: "5",
    target: "15",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e10-12",
    source: "10",
    target: "12",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e6-21",
    source: "6",
    target: "21",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },
  {
    id: "e6-19",
    source: "6",
    target: "19",
    label: "PROV",
    style: {
      strokeWidth: 2,
      stroke: "#00FF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FF00" },
  },

  {
    id: "e18-19",
    source: "18",
    target: "19",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e19-21",
    source: "19",
    target: "21",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e2-13",
    source: "2",
    target: "13",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e3-13",
    source: "3",
    target: "13",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e12-13",
    source: "12",
    target: "13",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e13-15",
    source: "13",
    target: "15",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e2-19",
    source: "2",
    target: "19",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e2-21",
    source: "2",
    target: "21",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e2-15",
    source: "2",
    target: "15",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e4-15",
    source: "4",
    target: "15",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e4-13",
    source: "4",
    target: "13",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },
  {
    id: "e13-18",
    source: "13",
    target: "18",
    label: "CIP",
    style: {
      strokeWidth: 2,
      stroke: "#FFFF00",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFFF00" },
  },

  {
    id: "e9-18",
    source: "9",
    target: "18",
    label: "DIV",
    style: {
      strokeWidth: 2,
      stroke: "#00FFFF",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#00FFFF" },
  },

  {
    id: "e11-17",
    source: "11",
    target: "17",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e13-17",
    source: "13",
    target: "17",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e15-16",
    source: "15",
    target: "16",
    label: "CON",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e16-17",
    source: "16",
    target: "17",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e15-17",
    source: "15",
    target: "17",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e7-20",
    source: "7",
    target: "20",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e9-20",
    source: "9",
    target: "20",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e18-20",
    source: "18",
    target: "20",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e10-14",
    source: "10",
    target: "14",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e1214",
    source: "12",
    target: "14",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  {
    id: "e21-22",
    source: "21",
    target: "22",
    label: "CON",
    style: {
      strokeWidth: 2,
      stroke: "#222222",
    },
    type: "floating",
    sourceHandle: "c",
    targetHandle: "a",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#222222" },
  },
  ///////
  // {
  //   id: 'e1-2',
  //   source: '1',
  //   target: '2',
  //   label: 'Green',
  //   style: {
  //     strokeWidth: 2,
  //     stroke: '#00FF00',
  //   },
  // },
  // {
  //   id: 'e1-2',
  //   source: '1',
  //   target: '2',
  //   label: 'Yellow',
  //   style: {
  //     strokeWidth: 2,
  //     stroke: '#FFFF00',
  //   },
  // },
  // {
  //   id: 'e1-2',
  //   source: '1',
  //   target: '2',
  //   label: 'Black',
  //   style: {
  //     strokeWidth: 2,
  //     stroke: '#222222',
  //   },
  // },
  // {
  //   id: 'e1-2',
  //   source: '1',
  //   target: '2',
  //   label: 'DIV',
  //   style: {
  //     strokeWidth: 2,
  //     stroke: '#00FFFF',
  //   },
  // },
];

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  floating: SimpleFloatingEdge,
};

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const fitViewOptions = { padding: 4 };

  return (
    <div className="App">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={fitViewOptions}
        connectionMode={ConnectionMode.Loose}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default App;
