

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCornerLeftUpFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10.0001 19.0001L19 19.0002L19 17.0002L12.0001 17.0001L12 9.41405H17.4142L11 2.99985L4.58578 9.41405L10 9.41406L10.0001 19.0001Z" />
        </G>
      </Svg>
    );
  }

