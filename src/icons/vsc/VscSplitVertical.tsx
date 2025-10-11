

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSplitVertical = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zm0 12H3V8h11v5zm0-6H3V2h11v5z" />
        </G>
      </Svg>
    );
  }

