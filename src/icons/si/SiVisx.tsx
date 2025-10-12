

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiVisx = (props: IconProps) => {

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
          <Path  d="M.00195 0 12 11.51953 23.99805 0h-5.8711L12 6.08984 5.87305 0Zm23.9961 0L12.47852 11.99805l11.51953 11.99804V18.125l-6.08985-6.12695 6.08985-6.12696ZM.00195.0039V5.875l6.08985 6.12695-6.08985 6.12696V24l11.5039-11.99805Zm0 23.9961h5.8711L12 17.91016 18.12695 24h5.8711L12 12.4707Z" />
        </G>
      </Svg>
    );
  }

