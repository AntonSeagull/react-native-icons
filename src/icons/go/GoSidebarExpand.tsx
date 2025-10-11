

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoSidebarExpand = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11.28 9.53 8.81 12l2.47 2.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-3-3a.75.75 0 0 1 0-1.06l3-3a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z" />
          <Path  d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25Zm13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z" />
        </G>
      </Svg>
    );
  }

