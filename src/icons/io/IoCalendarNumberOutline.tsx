

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCalendarNumberOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Polyline  points="304 260 347.42 228 352 228 352 396" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Line  x1="128" y1="48" x2="128" y2="80" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Line  x1="384" y1="48" x2="384" y2="80" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Line  x1="464" y1="160" x2="48" y2="160" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  d="M191.87,306.63c9.11,0,25.79-4.28,36.72-15.47a37.9,37.9,0,0,0,11.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4,0-33.52,11.61-37.85,18.93" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  d="M149,374.16c4.88,8.27,19.71,25.84,43.88,25.84,28.59,0,52.12-15.94,52.12-43.82,0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

