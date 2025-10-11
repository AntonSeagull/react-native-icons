

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiExpand = (props: IconProps) => {

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
          <Path d="M64 64v128l48-48 48 48 32-32-48-48 48-48H64zm256 0l48 48-48 48 32 32 48-48 48 48V64H320zM64 320v128h128l-48-48 48-48-32-32-48 48-48-48zm288 0l-32 32 48 48-48 48h128V320l-48 48-48-48z" fill="#000" />
        </G>
      </Svg>
    );
  }

