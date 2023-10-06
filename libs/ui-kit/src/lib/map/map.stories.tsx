import type { Meta, StoryObj } from '@storybook/react';
import Map from './Map';

const meta: Meta<typeof Map> = {
    component: Map,
    title: 'Map'
};
export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
    args: {
        token: '...',
        lat: 0,
        lon: 0,
        basemap: 'natural',
        height: 500,
        width: 500,
        layers: {
            'layer-1': {
                label: 'Layer 1',
                data: {
                    type: 'WFS',
                    url: 'https://...',
                    token: '...'
                },
                style: {
                    type: 'point',
                    size: 3,
                    color: 'red',
                    stroke: 1,
                    strokeColor: 'dark-red'
                }
            }
        },
        elements: {
            'title': {
                position: 'top-left',
                type: 'text',
                text: 'Welcome to Map Lab',
                fontSize: 24,
            },
            'subtitle': {
                position: 'top-left',
                type: 'text',
                text: 'The geospatial toolkit',
                fontSize: 18
            },
            'image': {
                position: 'top-left',
                type: 'image',
                source: 'https://...',
                height: 100,
                width: 100
            },
            'layer-1-size-control': {
                position: 'top-right',
                label: 'Size',
                type: 'range',
                source: '$layer-1.style.size',
                default: 3,
                min: 0,
                max: 24
            },
            'layer-1-credits': {
                position: 'bottom-left',
                label: 'Source',
                type: 'text',
                text: '$layer-1.data.source'
            },
        }
    }
}
