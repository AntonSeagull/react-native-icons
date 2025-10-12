

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiPackage = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8.517-0.035l-8.517 3.221v10.693l8.5 3.188 8.5-3.188v-10.692l-8.483-3.222zM15.084 3.528l-2.586 0.97-6.557-2.489 2.575-0.974 6.568 2.493zM8.5 5.997l-6.581-2.468 2.609-0.986 6.551 2.487-2.579 0.967zM1 4.253l7 2.625v8.932l-7-2.625v-8.932zM9 15.81v-8.932l7-2.625v8.932l-7 2.625z" />
        </G>
      </Svg>
    );
  }

