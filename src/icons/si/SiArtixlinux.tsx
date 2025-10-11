

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiArtixlinux = (props: IconProps) => {

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
          <Path d="M12 0L7.873 8.462l11.358 6.363zM6.626 11.018L.295 24l18.788-7.762zm13.846 6.352l-5.926 3.402L23.706 24Z" />
        </G>
      </Svg>
    );
  }

