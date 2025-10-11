

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiListDashesLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M90,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H96A6,6,0,0,1,90,64Zm126,58H96a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,64H96a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM56,58H40a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

