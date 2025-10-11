

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCropLine = (props: IconProps) => {

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
          <Path  d="M15 17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V17H15ZM17 22V7H9V5H18C18.5523 5 19 5.44772 19 6V17H22V19H19V22H17Z" />
        </G>
      </Svg>
    );
  }

