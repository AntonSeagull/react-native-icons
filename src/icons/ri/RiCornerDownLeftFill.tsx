

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCornerDownLeftFill = (props: IconProps) => {

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
          <Path d="M19.0001 13.9999L19.0002 5L17.0002 4.99997L17.0001 11.9999L9.41405 11.9999V6.58578L2.99985 13L9.41405 19.4142L9.41406 13.9999L19.0001 13.9999Z" />
        </G>
      </Svg>
    );
  }

