

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCornerRightDownFill = (props: IconProps) => {

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
          <Path  d="M13.9999 4.99989L5.00001 4.99976L4.99998 6.99976L11.9999 6.99986L12 14.5859H6.5858L13 21.0001L19.4142 14.5859L14 14.5859L13.9999 4.99989Z" />
        </G>
      </Svg>
    );
  }

