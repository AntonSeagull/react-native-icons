

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingCog = (props: IconProps) => {

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
          <Path  d="M3 21h9" />
          <Path  d="M9 8h1" />
          <Path  d="M9 12h1" />
          <Path  d="M9 16h1" />
          <Path  d="M14 8h1" />
          <Path  d="M14 12h1" />
          <Path  d="M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7" />
          <Path  d="M16 18c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414z" />
          <Path  d="M18 14.5v1.5" />
          <Path  d="M18 20v1.5" />
          <Path  d="M21.032 16.25l-1.299 .75" />
          <Path  d="M16.27 19l-1.3 .75" />
          <Path  d="M14.97 16.25l1.3 .75" />
          <Path  d="M19.733 19l1.3 .75" />
        </G>
      </Svg>
    );
  }

