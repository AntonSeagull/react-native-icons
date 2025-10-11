

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPush = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M376,352H272V198.63l52.69,52.68a16,16,0,0,0,22.62-22.62l-80-80a16,16,0,0,0-22.62,0l-80,80a16,16,0,0,0,22.62,22.62L240,198.63V352H136a56.06,56.06,0,0,1-56-56V88a56.06,56.06,0,0,1,56-56H376a56.06,56.06,0,0,1,56,56V296A56.06,56.06,0,0,1,376,352Z" />
          <Path d="M272,464a16,16,0,0,1-32,0V352h32Z" />
        </G>
      </Svg>
    );
  }

