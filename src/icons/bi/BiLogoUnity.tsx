

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoUnity = (props: IconProps) => {

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
          <Path  d="m10.4 17.8 1.21 2.07L19.77 22 22 14.08 20.72 12 22 10l-2.23-8-8.16 2.13L10.4 6.2H8L2 12l6 5.81zm9.92-5.8-1.73 6L15 12l3.59-6zM10.6 6.54 16.84 5l-3.59 6H6.08zM13.27 13l3.59 6-6.26-1.55L6.1 13z" />
        </G>
      </Svg>
    );
  }

