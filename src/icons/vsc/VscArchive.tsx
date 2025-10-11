

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscArchive = (props: IconProps) => {

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
          <Path d="M14.5 1h-13l-.5.5v3l.5.5H2v8.5l.5.5h11l.5-.5V5h.5l.5-.5v-3l-.5-.5zm-1 3H2V2h12v2h-.5zM3 13V5h10v8H3zm8-6H5v1h6V7z" />
        </G>
      </Svg>
    );
  }

