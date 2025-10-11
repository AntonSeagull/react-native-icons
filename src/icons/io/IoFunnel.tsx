

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFunnel = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M296,464a23.88,23.88,0,0,1-7.55-1.23l-80.15-26.67A23.92,23.92,0,0,1,192,413.32V294.11a.44.44,0,0,0-.09-.13L23.26,97.54A30,30,0,0,1,46.05,48H466a30,30,0,0,1,22.79,49.54L320.09,294a.77.77,0,0,0-.09.13V440a23.93,23.93,0,0,1-24,24Z" />
        </G>
      </Svg>
    );
  }

