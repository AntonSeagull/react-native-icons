

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextAlignCenterLight = (props: IconProps) => {

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
          <Path  d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM64,98a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Zm152,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-24,40H64a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

