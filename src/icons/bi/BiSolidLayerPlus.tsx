

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidLayerPlus = (props: IconProps) => {

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
          <Path d="m2.513 12.833 9.022 5.04a.995.995 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749l-9.022-5a1 1 0 0 0-.968-.001l-8.978 4.96a1 1 0 0 0-.003 1.749z" />
          <Path d="m3.485 15.126-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.971-1.748L12 19.856l-8.515-4.73zM20 8V6h2V4h-2V2h-2v2h-2v2h2v2z" />
        </G>
      </Svg>
    );
  }

