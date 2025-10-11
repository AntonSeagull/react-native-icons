

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiVercelLine = (props: IconProps) => {

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
          <Path d="M23 21.6479L12 2.35205L1 21.6479H23ZM19.5577 19.6479H4.4423L12 6.39042L19.5577 19.6479Z" />
        </G>
      </Svg>
    );
  }

