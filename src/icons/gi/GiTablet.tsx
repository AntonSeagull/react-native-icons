

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTablet = (props: IconProps) => {

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
          <Path  d="M22.5 93v326h467V93zm15.1 169.44a6.6 6.6 0 1 1 6.6-6.6 6.6 6.6 0 0 1-6.6 6.6zM427.5 401h-377V109h377zm29-133.32a11.85 11.85 0 1 1 11.85-11.85 11.85 11.85 0 0 1-11.85 11.85z" />
        </G>
      </Svg>
    );
  }

