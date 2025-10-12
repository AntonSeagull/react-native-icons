

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiSmugmug = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M18.31 0l-.35.01c-1.55.13-2.46 1.2-2.6 2.28-.15 1.2.65 2.4 2.58 2.28 2.15-.12 3.09-1.2 3.1-2.28.02-1.15-1-2.28-2.73-2.29zM7.21.34A2.66 2.66 0 004.56 2.6C4.41 3.73 5.12 4.87 7 4.85c2.23-.04 3.31-1.37 3.16-2.57-.12-1-1.09-1.92-2.94-1.94zm12.35 8.71a7 7 0 00-.4.02c-5.28.54-5.54.6-15.26.82C-.2 9.9.62 24 9.38 24c8.2 0 18.12-15.15 10.18-14.95zm-1.1 2.7c3.18-.07-2.9 9.53-8.8 9.56-7.46 0-6.44-8.8-5.18-8.85 8.67-.35 10.88-.64 13.98-.71Z" />
        </G>
      </Svg>
    );
  }

