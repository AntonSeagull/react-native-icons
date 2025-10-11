

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoustache = (props: IconProps) => {

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
          <Path d="M15 9a3 3 0 0 1 2.599 1.5h0c.933 1.333 2.133 1.556 3.126 1.556l.291 0l.77 -.044l.213 0c-.963 1.926 -3.163 2.925 -6.6 3l-.4 0l-.165 0a3 3 0 0 1 .165 -6z" />
          <Path d="M9 9a3 3 0 0 0 -2.599 1.5h0c-.933 1.333 -2.133 1.556 -3.126 1.556l-.291 0l-.77 -.044l-.213 0c.963 1.926 3.163 2.925 6.6 3l.4 0l.165 0a3 3 0 0 0 -.165 -6z" />
        </G>
      </Svg>
    );
  }

