

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiHotwire = (props: IconProps) => {

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
          <Path  d="m16.764 6.917-3.48.81L16.32 0 7.236 11.705l4.334-.854-4.087 7.982 2.364-.532L7.456 24l7.51-8.111-2.77.64 4.568-9.612z" />
        </G>
      </Svg>
    );
  }

